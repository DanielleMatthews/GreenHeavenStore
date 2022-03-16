const React = require('react')

class Index extends React.Component{
    render() {
        return (
            <div>
                <link rel="stylesheet" href="/css/app.css" />
                <h1> Plants Index </h1>
                <h3> <a href='/plants/new'>Create a new plant</a> </h3><br/> 
                <ul id="indexul">
                    {this.props.plants.map((plant, i) => {
                        return(
                        <li id="indexli">
                            <h3> {plant.name} </h3> 
                            <a href = {`/plants/${plant.id}`}> 
                            <img src={`${plant.img}.jpg`} height = "260px" width = "275px"></img> 
                            </a> 
                         
                        </li>
                    )}
                )}
                </ul>
            </div>
        )
    }
}

module.exports = Index