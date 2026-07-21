using MagicFilesLib;
using Moq;
using NUnit.Framework;
using System.Collections.Generic;

namespace DirectoryExplorer.Tests
{
    [TestFixture]
    public class DirectoryExplorerTests
    {
        private Mock<IDirectoryExplorer> mockDirectory;

        private readonly string _file1 = "file.txt";
        private readonly string _file2 = "file2.txt";

        [OneTimeSetUp]
        public void Init()
        {
            mockDirectory = new Mock<IDirectoryExplorer>();
        }

        [TestCase]
        public void GetFiles_ReturnsTwoFiles()
        {
            var files = new List<string>
            {
                _file1,
                _file2
            };

            mockDirectory
                .Setup(x => x.GetFiles(It.IsAny<string>()))
                .Returns(files);

            ICollection<string> result =
                mockDirectory.Object.GetFiles("C:\\Temp");

            Assert.That(result, Is.Not.Null);

            Assert.That(result.Count, Is.EqualTo(2));

            Assert.That(result.Contains(_file1), Is.True);
        }
    }
}