import React, {Component, Fragment} from 'react';
import API from '../../services/index';
import './ShowMusic.css';

class ShowMusic extends Component {
    state = {
        music: []
    }

    getPostAPI = () => {
        API.getMusic()
        .then(result => {
            this.setState({
                music: result
            })
            console.log('result',result)
        })
    }

    componentDidMount() {
        this.getPostAPI()
    }

    // componentDidUpdate() {
    //     this.getPostAPI()
    // }

    handleDetail = (id) => {
        this.props.history.push(`/detail/${id}`);
    }

    handleGenre = (id) => {
        this.props.history.push(`/genre/${id}`);
    }

    handleSinger = (id) => {
        this.props.history.push(`/singer/${id}`);
    }

    render() {
        return (
            <Fragment>
            {
                this.state.music.map(music => {
                    return (
                        <div className="post" key={music.id}>
                            <div className="img-container">
                                <img className="img-thumb" src={music.photo} alt="" onClick={() => this.handleDetail(music.id)}/>
                                <div className="duration">{music.durasi}</div>
                                <div className="genre" onClick={() => this.handleGenre(music.genre_id)}><span>{music.genre}</span></div>
                            </div>
                            
                            <div className="content">
                                <p className="title" onClick={() => this.handleDetail(music.id)}>{music.title}</p>
                                <p className="singer" onClick={() => this.handleSinger(music.singer_id)}>{music.singer}</p>
                                
                                <button className="btn-detail" onClick={() => this.handleDetail(music.id)}>Detail</button>
                            </div>
                        </div>
                    )
                })
            }
            </Fragment>
        )
    }
}

export default ShowMusic;