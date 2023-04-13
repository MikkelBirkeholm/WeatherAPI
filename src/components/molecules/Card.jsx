import { convertDateTime } from '@/utils/convertDateTime'
import { translateWeathercode } from '@/utils/translateWeatherCode'
import { windDirection } from '@/utils/windDirection'
export default function Card({ children, data }) {
  return (
    <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4">
      <div className="flex-1 p-4">
        <div className="max-w-xs overflow-hidden rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-100">
          <div
            className="flex h-32 items-end justify-end bg-cover bg-center p-4 dark:bg-gray-500"
            style={{
              backgroundImage: `url('/images/${
                translateWeathercode(data.weatherCode)[1]
              }')`,
            }}
          >
            <p className="rounded bg-opacity-75 px-2 py-1 text-sm uppercase tracking-widest shadow-lg dark:bg-gray-800 dark:text-gray-100">
              {convertDateTime(data.time)}
            </p>
          </div>
          <div className="flex justify-between p-4">
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <span className="text-5xl font-semibold">
                    {data.tempMax}°
                  </span>
                  <span className="text-lg dark:text-gray-400">
                    / {data.tempMin}°
                  </span>
                </div>
                <span className="text-5xl p-0 m-0">
                  {translateWeathercode(data.weatherCode)[2]}
                </span>
              </div>
              <p className="text-sm">
                {translateWeathercode(data.weatherCode)[0]}
              </p>
            </div>
            <div className="text-sm leading-loose">
              <div className="flex items-center"></div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-8 border-t p-4 dark:border-gray-700 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <span className="text-sm">
                {windDirection(data.windDirection)}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm">{data.windSpeed} m/s</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm">{data.precipitation}</span>
              <span className="text-sm">mm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
