import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 1,
                    name: "Products 1",
                    img: 'https://picsum.photos/id/11/250.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cumque.',
                    category: 'category 1',
                    price: '49.99'
                },
                {
                    id: 2,
                    name: "Products 2",
                    img: 'https://picsum.photos/id/12/250.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cumque.',
                    category: 'category 2',
                    price: '79.99'
                },
                {
                    id: 3,
                    name: "Products 3",
                    img: 'https://picsum.photos/id/13/250.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cumque.',
                    category: 'category 3',
                    price: '29.99'
                },
                {
                    id: 4,
                    name: "Products 4",
                    img: 'https://picsum.photos/id/14/250.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cumque.',
                    category: 'category 4',
                    price: '59.99'
                },
                {
                    id: 5,
                    name: "Products 5",
                    img: 'https://picsum.photos/id/15/250.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cumque.',
                    category: 'category 5',
                    price: '39.99'
                },
                {
                    id: 6,
                    name: "Products 6",
                    img: 'https://picsum.photos/id/16/250.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cumque.',
                    category: 'category 6',
                    price: '69.99'
                },
                {
                    id: 7,
                    name: "Products 7",
                    img: 'https://picsum.photos/id/17/250.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cumque.',
                    category: 'category 7',
                    price: '59.99'
                },
                {
                    id: 8,
                    name: "Products 8",
                    img: 'https://picsum.photos/id/18/250.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cumque.',
                    category: 'category 8',
                    price: '49.99'
                },
                {
                    id: 9,
                    name: "Products 9",
                    img: 'https://picsum.photos/id/19/250.jpg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cumque.',
                    category: 'category 9',
                    price: '79.99'
                },
            ]
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <Items items={this.state.items} />
                <Footer />
            </div>
        );
    }
}

export default App;
