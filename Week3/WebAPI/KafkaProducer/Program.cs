using Confluent.Kafka;

var config = new ProducerConfig
{
    BootstrapServers = "localhost:9092"
};

using var producer = new ProducerBuilder<Null, string>(config).Build();

Console.WriteLine("Enter messages. Type exit to stop.");

while (true)
{
    string message = Console.ReadLine();

    if (message == "exit")
        break;

    var result = await producer.ProduceAsync("ChatTopic",
        new Message<Null, string>
        {
            Value = message
        });

    Console.WriteLine($"Sent : {result.Value}");
}