import React, { Component, Fragment } from 'react';
import logo from '../../assets/playbutton.png'
import API from '../../services/index';
import './DetailMusic.css';

class DetailMusic extends Component {
    state = {
        music : []
    }

    componentDidMount () {
        let id = this.props.match.params.id;
        API.getMusicDetail(id)
        .then(res => {
            console.log('hasil res',res)
            this.setState ({
                music: res
            })
        })
    }

    handleRemove = (data) => {
        API.deleteMusic(data)
        .then(this.props.history.push(`/`))
    }

    handleGenre = (id) => {
        this.props.history.push(`/genre/${id}`);
    }

    handleSinger = (id) => {
        this.props.history.push(`/singer/${id}`);
    }

    // handleUpdate = (id) => {
    //     this.props.history.push(`/update/${id}`);
    // }

    render() {
        return (
            <Fragment>
                {
                this.state.music.map(music => {
                    return (
                        <div className="container" key={music.id}>
                            <img className="img-song" src={music.photo} alt=""/>
                            <img className="img-play" src={logo} alt=""/>
                            <div className="song">
                                <p className="singer-p" onClick={() => this.handleSinger(music.singer_id)}><span>{music.singer}</span></p>
                                <p className="title-p"><span>{music.title}</span></p>
                                <p className="durasi">{music.durasi}</p>
                                <p className="genr" onClick={() => this.handleGenre(music.genre_id)}><span>{music.genre}</span></p>
                                <p className="desc">Description: <br/>{music.deskripsi}</p>
                                <button className="remove-btn" onClick={() => this.handleRemove(music.id)}>Remove</button>
                            </div>    
                        </div>
                    )
                })
            }
            </Fragment>   
        )
    }
}

export default DetailMusic;