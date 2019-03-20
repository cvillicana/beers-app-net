import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './footer.scss'


class Footer extends Component {

    render() {

        const ImageSize = {
            width: "35px",
            height: "35px"
        }

        return(
            <footer>
                <div class="row">
                    <div class="col-md-5 p-4">
                        <h2>Footer</h2>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper feugiat odio, eu varius purus. Suspendisse potenti. Donec posuere mi leo, id posuere ante pulvinar ac. Integer ultrices mi at magna dictum, congue rhoncus diam feugiat. Praesent porttitor purus in lectus tincidunt blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non libero pulvinar, facilisis ante in, eleifend enim.</p>
                    </div>
                    <div class="col-md-4 p-4">
                            <img src="./././assets/images/facebook.png" alt="facebook" />
                            <img src="../../assets/images/github.png" alt="github" />
                            <img src="../../../../assets/images/instagram.png" alt="instagram" />
                       
                    </div>
                </div>
            </footer>

        );
    }


}

export default Footer;