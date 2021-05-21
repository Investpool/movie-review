import React, { Component } from 'react';


 class MovieClass extends Component {
    constructor(props) {
        super(props);
        this.state = {movies: [] 
        };

    }
    
    componentWillUnmount() {}

    componentDidMount() {
        console.log();
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=9rTEXDc2x3ouZlDpP9CkzVtXKo8kUq6E')
            
            .then((response) => {
                return response.json ();
                
                
            })
            .then ((jsonData) => {
                console.log(jsonData)
                this.setState({movies: jsonData.results})
           
            });
        }

    render() {
        console.log(this.state)
        return (
            <div>
                {
                this.state.movies.map((movies)=> {
                    return(
                        <div>
                           <p> <strong className="info">ByLine</strong> {movies.byline}</p>
                           
                          
                           <p> <strong>Critic Pick</strong> {movies.criticpick}</p>
                          
                           <p> <strong>Tittle</strong> {movies.tittle}</p>
                           
                           
                           <p> <strong>Headline</strong> {movies.headline}</p>
                           
                            

                        </div>
                    )

                
                })}
                
            </div>
        )
    }
}
export default MovieClass;
