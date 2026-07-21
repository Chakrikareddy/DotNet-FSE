using Confluent.Kafka;

namespace KafkaChatClient
{
    public partial class Form1 : Form
    {
        private readonly ConsumerConfig config;
        private IConsumer<Ignore, string> consumer;

        public Form1()
        {
            InitializeComponent();

            config = new ConsumerConfig
            {
                BootstrapServers = "localhost:9092",
                GroupId = Guid.NewGuid().ToString(),
                AutoOffsetReset = AutoOffsetReset.Latest
            };
        }

        // Form Load
        private void Form1_Load(object sender, EventArgs e)
        {
            consumer = new ConsumerBuilder<Ignore, string>(config).Build();
            consumer.Subscribe("ChatTopic");

            timer1.Interval = 500;
            timer1.Start();
        }

        // Send Button
        private async void btnSend_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtMessage.Text))
            {
                MessageBox.Show("Enter a message.");
                return;
            }

            var producerConfig = new ProducerConfig
            {
                BootstrapServers = "localhost:9092"
            };

            using var producer =
                new ProducerBuilder<Null, string>(producerConfig).Build();

            try
            {
                await producer.ProduceAsync(
                    "ChatTopic",
                    new Message<Null, string>
                    {
                        Value = txtMessage.Text
                    });

                txtMessage.Clear();
                txtMessage.Focus();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        // Receive Messages
        private void timer1_Tick(object sender, EventArgs e)
        {
            try
            {
                var result = consumer.Consume(TimeSpan.FromMilliseconds(100));

                if (result != null)
                {
                    lstMessages.Items.Add(result.Message.Value);

                    lstMessages.TopIndex =
                        lstMessages.Items.Count - 1;
                }
            }
            catch
            {
                // Ignore timeout errors
            }
        }

        // Close Consumer
        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            timer1.Stop();

            if (consumer != null)
            {
                consumer.Close();
                consumer.Dispose();
            }
        }
    }
}