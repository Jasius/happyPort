import React, { Component } from 'react';
import Modal from 'react-modal';

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

class projects extends Component {
    state = {
        firstModal: false,
        secondModal: false
    };
    openModal = modalType => () => {
        if (modalType === "first") {
            this.setState({
                firstModal: true,
                secondModal: false
            });
        } else if (modalType === "second") {
            this.setState({
                firstModal: false,
                secondModal: true
            });
        }
    };
    closeModal = modalType => () => {
        if (modalType === "first") {
            this.setState({
                firstModal: false
            });
        } else if (modalType === "second") {
            this.setState({
                secondModal: false
            });
        }
    };
    render () {
        const { firstModal, secondModal } = this.state;
        return (
            <main className="font-sans">
                <div>
                    <section className="bg-gray-800 pattern py-20">
                        <div className="max-w-5xl px-6 mx-auto text-center">
                            <h2 className="text-4xl font-semibold text-white mb-10">Projects</h2>
                            <div class="flex mb-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"><div class="w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><div class="flex items-center justify-center  bg-white  overflow-hidden">
                                <img class="object-cover" src="https://via.placeholder.com/1920x1080.png" alt="" />
                            </div>
                                <a class="block bg-gray-700 rounded-md overflow-hidden ">
                                    <div class="py-2 px-3 text-center text-sm"><p class="text-gray-300">Bazaarvoice is a digital marketing company.
                                </p>
                                        <span class="block text-gray-500 mt-2">jaska.dev</span>
                                    </div>
                                </a>
                            </div>
                            </div>
                            <div className="flex items-center justify-center mt-10">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    <div onClick={this.openModal("first")} className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
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
                                    <Modal isOpen={firstModal} style={customStyles} onRequestClose={this.closeModal("first")}>
                                        <button onClick={this.closeModal("first")}>Close</button>
                                        <button onClick={this.openModal("second")}>Open next</button>
                                    </Modal>
                                    <div onClick={this.openModal("second")} className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
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
                                    <Modal isOpen={secondModal} style={customStyles} onRequestClose={this.closeModal("second")}>
                                        <button onClick={this.closeModal("second")}>Close</button>
                                        <button onClick={this.openModal("first")}>Open previous</button>
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
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        );
    }
}

export default projects;