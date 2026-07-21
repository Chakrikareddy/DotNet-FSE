using System;
using Moq;
using NUnit.Framework;
using PlayersManagerLib;

namespace PlayerManager.Tests
{
    [TestFixture]
    public class PlayerTests
    {
        private Mock<IPlayerMapper> mockMapper;

        [OneTimeSetUp]
        public void Init()
        {
            mockMapper = new Mock<IPlayerMapper>();
        }

        [TestCase]
        public void RegisterNewPlayer_ReturnsPlayer()
        {
            mockMapper.Setup(x => x.IsPlayerNameExistsInDb(It.IsAny<string>()))
                      .Returns(false);

            mockMapper.Setup(x => x.AddNewPlayerIntoDb(It.IsAny<string>()));

            Player player = Player.RegisterNewPlayer("Virat", mockMapper.Object);

            Assert.That(player.Name, Is.EqualTo("Virat"));
            Assert.That(player.Age, Is.EqualTo(23));
            Assert.That(player.Country, Is.EqualTo("India"));
            Assert.That(player.NoOfMatches, Is.EqualTo(30));
        }

        [TestCase]
        public void RegisterNewPlayer_PlayerAlreadyExists_ThrowsException()
        {
            mockMapper
                .Setup(x => x.IsPlayerNameExistsInDb(It.IsAny<string>()))
                .Returns(true);

            Action action = () =>
            {
                Player.RegisterNewPlayer("Virat", mockMapper.Object);
            };

            Assert.Throws<ArgumentException>(action);
        }
    }
}