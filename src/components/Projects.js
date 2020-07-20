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
        // marginRight: '-50%',
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
                        <section className="bg-primaryBlue pattern py-20">
                            <div className="max-w-5xl px-6 mx-auto text-center">
                                <h2 className="text-4xl font-semibold text-white mb-10">Projects</h2>
                                <div class="flex mb-4 transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <div onClick={this.toggleModal(modals[1])} class="w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                        <div class="flex items-center justify-center  bg-white  overflow-hidden">
                                            <img class="object-cover" src="https://jaska.dev/bazaarvoice.618d8db4.png" alt="" />
                                        </div>
                                        <a class="block bg-secondaryBlue rounded-b overflow-hidden ">
                                            <div class="py-2 px-3 text-center text-sm">
                                                <p class="text-gray-300">Bazaarvoice - digital marketing company</p>
                                                <span class="block text-gray-500 mt-2">Internal tools developer & QA Engineer</span>
                                            </div>
                                        </a>
                                    </div>
                                    <Modal
                                        style={customStyles}
                                        isOpen={currentModal == modals[1]}
                                        onAfterOpen={this.handleOnAfterOpenModal}
                                        onRequestClose={this.handleModalCloseRequest}>
                                        <button className="float-right" onClick={this.toggleModal(modals[1])}>x</button>
                                        <h1 className="text-3xl font-semibold text-gray-800">Bazaarvoice</h1>
                                        <p>Internal tools developer & QA Engineer</p>
                                        <p>Vilnius, Lithuania</p>
                                        <p>Bazaarvoice is a digital marketing company. It provides software that allows retailers to add customer reviews to their websites. Bazaarvoice is third biggest company in the world by CGC, behind Google and Facebook.</p>
                                        <ul className="list-disc ml-4"><li>Developed internal automation tool, scripts, extensions for QA team.</li><li>Leading QA team work distribution and estimation.</li><li>Supporting co-workers with technical knowledge and eliminating manual work programmatically wherever possible.</li><li>Contributing to various internal projects outside of my scope during free time.</li><li>Introduced new tab extension which provides various teams personalized tools and shortcuts to make jumping between tools a lot easier.</li><li>Extensive Jira, JQL support for QA and surrounding teams.</li></ul>
                                    </Modal>
                                </div>
                                <div className="flex items-center justify-center mt-10">
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        <div onClick={this.toggleModal(modals[0])} className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                            <div className="flex items-center justify-center  bg-white  overflow-hidden">
                                                <img className="object-cover " src="https://jaska.dev/omnisend.bec1be09.png" alt="" />
                                            </div>
                                            <a className="block bg-secondaryBlue rounded-b overflow-hidden ">
                                                <div className="py-2 px-3 text-center text-sm">
                                                    <p className="text-gray-300">Omnisend - eCommerce marketing platform</p>
                                                    <span className="block text-gray-500 mt-2">Front end developer</span>
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
                                        <div className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                            <div className="flex items-center justify-center  bg-white  overflow-hidden">
                                                <img className="object-cover " src="https://jaska.dev/w10.b2283865.png" alt="" />
                                            </div>
                                            <a className="block bg-secondaryBlue rounded-b overflow-hidden ">
                                                <div className="py-2 px-3 text-center text-sm">
                                                    <p className="text-gray-300">Microsoft Community - Social platform</p>
                                                    <span className="block text-gray-500 mt-2">Lead developer & Community manager</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                            <div className="flex items-center justify-center  bg-white  overflow-hidden">
                                                <img className="object-cover " src="https://jaska.dev/bookie.8ad5942a.png" alt="" />
                                            </div>
                                            <a className="block bg-secondaryBlue rounded-b overflow-hidden ">
                                                <div className="py-2 px-3 text-center text-sm">
                                                    <p className="text-gray-300">Bookie.GG - Gambling platform</p>
                                                    <span className="block text-gray-500 mt-2">Junior web designer & Community manager</span>
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