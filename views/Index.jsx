const React = require('react')

class Index extends React.Component{
    render() {
        return (
            <div>
                <h1> Plants Index </h1>
                <ul>
                    {this.props.plants.map((plant, i) => {
                        return(
                        <li>
                            The plant is called {plant.name}. <a href = {`/plants/${plant.id}`}> Info </a>
                            <a href={`/plants/${plant._id}/edit`}> Edit This Plant</a> 
                            <form action={`/plants/${plant._id}?_method=DELETE`} method="POST">
                                <input id="delete" type="submit" value="DELETE"/>
                            </form> <br></br>
                        </li>
                    )}
                )}
                </ul>
                <nav>
          <a href='/plants/new'>Create a new plant</a>
        </nav>
            </div>
        )
    }
}

module.exports = Index