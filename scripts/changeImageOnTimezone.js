const currentTime = new Date();
const currentHour = currentTime.getHours();

const imageElement = document.getElementById('timezoneImage');
if (currentHour >= 6 && currentHour < 12) {
  // Morning
  imageElement.src = 'videos/morning.jpg';
}
else if (currentHour >= 12 && currentHour < 18) {
  // Afternoon
  imageElement.src = 'videos/afternoon.jpg';
}
else if (currentHour >= 18 && currentHour < 21) {
  // Evening
  imageElement.src = 'videos/evening.jpg';
}
else {
  // Night
  imageElement.src = 'videos/night.jpg';
}
