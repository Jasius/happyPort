import React, { Component } from 'react';
import Modal from 'react-modal';

const modals = ['modals[1]', 'modals[0]']

const DEFAULT_TITLE = 'Default title';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Projects extends Component {
    componentDidMount () {
        Modal.setAppElement('#root');
    }
    constructor(props) {
        super(props);
        this.state = {
            title1: DEFAULT_TITLE,
            currentModal: null
        };
    }

    toggleModal = key => event => {
        event.preventDefault();
        if (this.state.currentModal) {
            this.handleModalCloseRequest();
            return;
        }

        this.setState({
            ...this.state,
            currentModal: key,
            title1: DEFAULT_TITLE
        });
    }

    handleModalCloseRequest = () => {
        this.setState({
            ...this.state,
            currentModal: null
        });
    }

    handleInputChange = e => {
        let text = e.target.value;
        if (text == '') {
            text = DEFAULT_TITLE;
        }
        this.setState({ ...this.state, title1: text });
    }

    handleOnAfterOpenModal = () => {
        this.heading && (this.heading.style.color = '#F00');
    }

    render () {
        const { currentModal } = this.state;
        return (
            <div>
                <main className="font-sans">
                    <div>
                        <section className="bg-gray-800 pattern py-20">
                            <div className="max-w-5xl px-6 mx-auto text-center">
                                <h2 className="text-4xl font-semibold text-white mb-10">Projects</h2>
                                <div class="flex mb-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                    <div onClick={this.toggleModal(modals[1])} class="w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                        <div class="flex items-center justify-center  bg-white  overflow-hidden">
                                            <img class="object-cover" src="https://via.placeholder.com/1920x1080.png" alt="" />
                                        </div>
                                        <a class="block bg-gray-700 rounded-md overflow-hidden ">
                                            <div class="py-2 px-3 text-center text-sm">
                                                <p class="text-gray-300">Bazaarvoice is a digital marketing company.</p>
                                                <span class="block text-gray-500 mt-2">jaska.dev</span>
                                            </div>
                                        </a>
                                    </div>
                                    <Modal
                                        style={customStyles}
                                        isOpen={currentModal == modals[1]}
                                        onAfterOpen={this.handleOnAfterOpenModal}
                                        onRequestClose={this.handleModalCloseRequest}>
                                        <p>Bazaarvoice</p>
                                        <button onClick={this.toggleModal(modals[1])}>close</button>
                                    </Modal>
                                </div>
                                <div className="flex items-center justify-center mt-10">
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        <div onClick={this.toggleModal(modals[0])} className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                            <div className="flex items-center justify-center  bg-white  overflow-hidden">
                                                <img className="object-cover " src="https://via.placeholder.com/1920x1080.png" alt="" />
                                            </div>
                                            <a className="block bg-gray-700 rounded-md overflow-hidden ">
                                                <div className="py-2 px-3 text-center text-sm">
                                                    <p className="text-gray-300">Bazaarvoice is a digital marketing company.</p>
                                                    <span className="block text-gray-500 mt-2">jaska.dev</span>
                                                </div>
                                            </a>
                                        </div>
                                        <Modal
                                            style={customStyles}
                                            isOpen={currentModal == modals[0]}
                                            onAfterOpen={this.handleOnAfterOpenModal}
                                            onRequestClose={this.toggleModal(modals[0])}>
                                            <p>Omnisend</p>
                                            <button onClick={this.toggleModal(modals[0])}>close</button>
                                        </Modal>
                                        <div className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                            <div className="flex items-center justify-center  bg-white  overflow-hidden">
                                                <img className="object-cover " src="https://via.placeholder.com/1920x1080.png" alt="" />
                                            </div>
                                            <a className="block bg-gray-700 rounded-md overflow-hidden ">
                                                <div className="py-2 px-3 text-center text-sm">
                                                    <p className="text-gray-300">Bazaarvoice is a digital marketing company.</p>
                                                    <span className="block text-gray-500 mt-2">jaska.dev</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                            <div className="flex items-center justify-center  bg-white  overflow-hidden">
                                                <img className="object-cover " src="https://via.placeholder.com/1920x1080.png" alt="" />
                                            </div>
                                            <a className="block bg-gray-700 rounded-md overflow-hidden ">
                                                <div className="py-2 px-3 text-center text-sm">
                                                    <p className="text-gray-300">Bazaarvoice is a digital marketing company.</p>
                                                    <span className="block text-gray-500 mt-2">jaska.dev</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}

export default Projects;