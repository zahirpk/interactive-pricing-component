const rangeValue = document.getElementById('rangeSlider');
const progressValue = document.getElementById('progressSlider');
const sliderValue = document.getElementById('sliderValue');
var toggleButton = document.getElementById('toggle-button');
const pageViewsText = document.getElementById('pageViews_text')

rangeValue.value = rangeValue.min;
rangeValue.addEventListener('input', function () {
  let getRangeValue = parseFloat(this.value).toFixed(2);
  const max = this.max;
  const progressWidth = (getRangeValue / max) * 100

  progressValue.style.width = progressWidth + "%";
  progressValue.style.backgroundColor = "hsl(174, 77%, 80%)";

  if (toggleButton.checked) {
    const calculateDiscount = ((getRangeValue * 12) * 25) / 100;
    const yearlyDiscount = (getRangeValue * 12) - calculateDiscount;
    const pageViewsCompaign = (getRangeValue * 12) + yearlyDiscount;
    sliderValue.innerHTML = "$" + yearlyDiscount + "<span> /year </span>";
    pageViewsText.innerHTML = pageViewsCompaign + "K Pageviews";
  } else {
    const pageViewsCompaign = getRangeValue * getRangeValue;
    sliderValue.innerHTML = "$" + getRangeValue + "<span> /month </span>";
    pageViewsText.innerHTML = pageViewsCompaign + "K Pageviews";
  }
  toggleButton.addEventListener("change", function () {

    if (toggleButton.checked) {
      const calculateDiscount = ((getRangeValue * 12) * 25) / 100;
      const yearlyDiscount = (getRangeValue * 12) - calculateDiscount;
      const pageViewsCompaign = (getRangeValue * 12) + yearlyDiscount;
      sliderValue.innerHTML = "$" + yearlyDiscount + "<span> /year </span>";
      pageViewsText.innerHTML = pageViewsCompaign + "K Pageviews";
    } else {
      const pageViewsCompaign = getRangeValue * getRangeValue;
      sliderValue.innerHTML = "$" + getRangeValue + "<span> /month </span>";
      pageViewsText.innerHTML = pageViewsCompaign + "K Pageviews";
    }
  });
});