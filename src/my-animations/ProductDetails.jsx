import React, { Component } from "react";
import im1 from './Images/im1.png';
import im2 from './Images/im2.png';
import im3 from './Images/im3.png';
import im4 from './Images/im4.png';
import red1 from './Images/red1.png';
import red2 from './Images/red2.png';

class ProductDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            mainImage: im1,
            selectedColor: "black",
            selectedCapacity: "128GB",
        };

        this.phoneImages = {
            black: {
                front: im1,
                back: im2,
                left: im3,
                right: im4,
            },
            blue: {
                front: im1,
                back: im2,
                left: im3,
                right: im4,
            },
            red: {
                front: red1,
                back: red2,
                left: im3,
                right: im4,
            }
        };
    }

    handleImageChange = (side) => {
        const{ selectedColor } = this.state;
        this.setState({ 
            mainImage: this.phoneImages[selectedColor][side]
        });
    };

    handleColorChange = (color) => {
        this.setState({
            selectedColor: color,
            mainImage: this.phoneImages[color].front
        })
    }

    handleCapacityChange = (capacity) => {
        this.setState({ selectedCapacity: capacity });
    };

    render() {
        const { mainImage, selectedColor, selectedCapacity } = this.state;

        return(
            <div>
                <div>
                    <img src={mainImage} alt="PhoneSide" style = {{ width: "300px" }}/>
                    <div>
                        {Object.keys(this.phoneImages[selectedColor]).map((side) => (
                            <img
                                key={side}
                                src={this.phoneImages[selectedColor][side]}
                                alt={`${side} view`}
                                onClick={() => this.handleImageChange(side)}
                                style={{
                                    width: "80px",
                                    margin: "10px",
                                    cursor: "pointer",
                                    border: mainImage === this.phoneImages[selectedColor][side] ? "2px solid blue" : "none",
                                }}
                            />
                        ))}
                    </div>

                    <div>Grafite- 128 GB-4GB RAM-6.7" inches</div>
                    <div>moto g24 5G</div>
                    <div>
                        <div>Capacity</div>
                        <div style={{display: "flex", marginTop: "10px"}}>
                            <div
                                onClick={() => this.handleCapacityChange("128GB")}
                                style={{
                                padding: "10px 20px",
                                margin: "0 10px",
                                borderRadius: "30px",
                                border: selectedCapacity === "128GB" ? "2px solid blue" : "2px solid gray",
                                cursor: "pointer"
                                }}
                            >
                                128GB
                            </div>

                            <div
                                onClick={() => this.handleCapacityChange("256GB")}
                                style={{
                                padding: "10px 20px",
                                margin: "0 10px",
                                borderRadius: "30px",
                                border: selectedCapacity === "256GB" ? "2px solid blue" : "2px solid gray",
                                cursor: "pointer",
                                }}
                            >
                                256GB
                            </div>
                        </div>
                    </div>


                    <div style={{ marginTop: "20px" }}>
                        {["black", "blue", "red"].map((color) => (
                            <div
                            key={color}
                            onClick={() => this.handleColorChange(color)}
                            style={{
                                display: "inline-block",
                                width: "30px",
                                height: "30px",
                                backgroundColor: color,
                                borderRadius: "50%",
                                margin: "10px",
                                cursor: "pointer",
                                border: selectedColor === color ? "2px solid blue" : "none",
                            }}
                            />
                        ))}
                    </div>

                    <div>
                        Technical Summary
                    </div>

                    <div>
                        <div>
                            <div>
                                camera
                            </div>
                            <div>
                                Battery
                            </div>
                        </div>

                        <div>
                            <div>
                                Processor
                            </div>
                            <div>
                                Google Wallet
                            </div>
                        </div>
                    </div>

                    <div> See more information</div>
                </div>

                <div
                    style={{
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        backgroundColor: "#fff",
                        padding: "20px",
                        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
                        textAlign: "center",
                    }}
                    >
                    <div style={{ fontSize: "16px", marginBottom: "10px" }}>
                        Down payment of $42,000
                    </div>
                    <button
                        style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        borderRadius: "30px",
                        border: "none",
                        backgroundColor: "blue",
                        color: "#fff",
                        cursor: "pointer",
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        )
    }
}

export default ProductDetails;