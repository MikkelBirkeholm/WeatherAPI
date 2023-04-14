export default function HourCard({ data }) {
  return (
    <div class="hour">
      <span>${hourtime}</span>
      <span class="hour-temp">${data.temperature_2m[i]}°C</span>
      <span class="hour-rain">${data.precipitation[i]} mm</span>
      <span class="hour-wind">${windDirection(data.winddirection_10m[i])}</span>
      <span>${translateWeathercode(data.weathercode[i])[0]}</span>
    </div>
  )
}
/* CSS
.hour {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 0.5rem;
    padding: 0.5rem;
  }
  
  .hour-wrapper {
    overflow: scroll;
    width: 100%;
    border: 1px dotted var(--color-text-alt);
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

   */
