using System;
using NUnit.Framework;
using CalcLibrary;

namespace CalcLibrary.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private SimpleCalculator calculator;

        // Runs before every test
        [SetUp]
        public void SetUp()
        {
            calculator = new SimpleCalculator();
        }

        // Runs after every test
        [TearDown]
        public void TearDown()
        {
            calculator = null;
        }

        // -------------------- Addition Tests --------------------

        [Test]
        public void Addition_ReturnsThirty()
        {
            double result = calculator.Addition(10, 20);

            Assert.AreEqual(30, result);
        }

        [TestCase(10, 20, 30)]
        [TestCase(5, 5, 10)]
        [TestCase(0, 10, 10)]
        [TestCase(-5, 5, 0)]
        [TestCase(-10, -20, -30)]
        [TestCase(2.5, 3.5, 6.0)]
        public void Addition_ReturnsExpectedResult(double a, double b, double expected)
        {
            double actual = calculator.Addition(a, b);

            Assert.AreEqual(expected, actual);
        }

        // -------------------- Subtraction Tests --------------------

        [TestCase(20, 10, 10)]
        [TestCase(10, 20, -10)]
        [TestCase(10, 10, 0)]
        [TestCase(-5, -5, 0)]
        [TestCase(-10, 5, -15)]
        public void Subtraction_ReturnsExpectedResult(double a, double b, double expected)
        {
            double actual = calculator.Subtraction(a, b);

            Assert.AreEqual(expected, actual);
        }

        // -------------------- Multiplication Tests --------------------

        [TestCase(10, 2, 20)]
        [TestCase(5, 5, 25)]
        [TestCase(10, 0, 0)]
        [TestCase(-5, 5, -25)]
        [TestCase(-2, -5, 10)]
        public void Multiplication_ReturnsExpectedResult(double a, double b, double expected)
        {
            double actual = calculator.Multiplication(a, b);

            Assert.AreEqual(expected, actual);
        }

        // -------------------- Division Tests --------------------

        [TestCase(20, 10, 2)]
        [TestCase(10, 2, 5)]
        [TestCase(25, 5, 5)]
        [TestCase(-20, 5, -4)]
        [TestCase(2.5, 0.5, 5)]
        public void Division_ReturnsExpectedResult(double a, double b, double expected)
        {
            double actual = calculator.Division(a, b);

            Assert.AreEqual(expected, actual);
        }

        // -------------------- Division by Zero --------------------

        [Test]
        public void Division_ByZero_ShouldThrowArgumentException()
        {
            try
            {
                calculator.Division(10, 0);

                Assert.Fail("Division by zero");
            }
            catch (ArgumentException ex)
            {
                Assert.AreEqual("Second Parameter Can't be Zero", ex.Message);
                Assert.AreEqual(typeof(ArgumentException), ex.GetType());
            }
        }

        // -------------------- Void Method Test --------------------

        [Test]
        public void TestAddAndClear()
        {
            double result = calculator.Addition(20, 10);

            Assert.AreEqual(30, result);

            calculator.AllClear();

            Assert.AreEqual(0, calculator.GetResult);
        }

        // -------------------- AssertionException Demo --------------------

        [Test]
        public void AssertionExceptionDemo()
        {
            try
            {
                Assert.AreEqual(10, 20);
            }
            catch (AssertionException)
            {
                Assert.Pass("AssertionException Caught Successfully");
            }
        }

        // -------------------- Ignore Attribute --------------------

        [Test]
        [Ignore("Feature under development")]
        public void FutureTest()
        {
            // Test will be implemented later
        }
    }
}