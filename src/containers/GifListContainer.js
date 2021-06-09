import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch';


class GifListContainer extends Component {
    state = {
        gifs: []
    }

    componentDidMount(){
        this.fetchGifs()
    }

    fetchGifs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=LA9tznRgvkAFDdgF9d5VMWZ99VzXs3pk&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(({data}) => {
            // console.log({data})
            this.setState({
                gifs: data.map(gif => ({url: gif.images.original.url}))
            })
        })
    }

    render(){
        return (
            <div>
                < GifList gifs={this.state.gifs}/>
                < GifSearch fetchGifs={this.fetchGifs} />
            </div>
        )
    }
}

export default GifListContainer