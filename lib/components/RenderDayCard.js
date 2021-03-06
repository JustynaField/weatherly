import React from 'react'


const RenderDayCard = ({ dayWeather }) => {
  return (
    <div>
      { dayWeather.map(dayCard => {
        return (
          <article key = {dayCard.id} className = "day-card">
            <p className="td td-day">{dayCard.day}</p>
            <img src = {dayCard.image} className="td"/>
            <p className="td"><span>H:</span> {dayCard.high} F</p>
            <p className="td td-l"><span>L:</span> {dayCard.low} F</p>
          </article>
        );
      }) }
    </div>
  );
};

export default RenderDayCard
