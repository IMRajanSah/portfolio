import "./Travel.css"
export function Travel(){
  return(
    <div className="travel">
      <div className="travel-title"><b>Rishikesh & Devprayag</b></div>
      <div className="travel-body">
        <div className="travel-body-description">
        Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of the Indian state Uttarakhand. It is situated on the right bank of the Ganges River and is a pilgrimage town for Hindus, with ancient sages and saints meditating here in search of higher knowledge. There are numerous temples and ashrams built along the banks of the river.
        </div>
        <div className="travel-body-image">
          <div className="travel-images">
            <img src={require("../../img/blog/1.jpg")} alt="" />
            <img src={require("../../img/blog/2.jpg")} alt="" />
            <img src={require("../../img/blog/3.jpg")} alt="" />
            <img src={require("../../img/blog/4.jpg")} alt="" />
            <img src={require("../../img/blog/5.jpg")} alt="" />
            <img src={require("../../img/blog/6.jpg")} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}