import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import porfolioData from '../assets/portfolioData.json'

const modals = []
Object.keys(porfolioData.projects).map(x => modals.push(`modal[${x}]`))

const DEFAULT_TITLE = 'Default title';

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
        if (text === '') {
            text = DEFAULT_TITLE;
        }
        this.setState({ ...this.state, title1: text });
    }

    handleOnAfterOpenModal = () => {
        this.heading && (this.heading.style.color = '#F00');
    }

    render () {
        const { currentModal } = this.state;

        const heroProject = () => {
            const heroTemplate =
                (<Fragment>
                    <div className="flex mb-4 mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1">
                        <div onClick={this.toggleModal(modals[0])} className="w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer shadow-lg">
                            <div className="flex items-center justify-center  bg-white  overflow-hidden">
                                <img className="object-cover" src={'assets/img/' + porfolioData.projects[0].imageUrl} alt={'Image of ' + porfolioData.projects[0].name} />
                            </div>
                            <a className="block bg-secondaryBlue rounded-b overflow-hidden ">
                                <div className="py-4 px-3 text-center text-sm">
                                    <p className="text-gray-300 text-xl font-semibold">{porfolioData.projects[0].name}</p>
                                    <span className="block text-gray-500">Internal tools developer & QA Engineer</span>
                                </div>
                            </a>
                        </div>
                        <Modal className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated faster fadeIn"
                            isOpen={currentModal === modals[0]}
                            onAfterOpen={this.handleOnAfterOpenModal}
                            style={{
                                overlay: {
                                    backgroundColor: '#343f5985'
                                }
                            }}
                            onRequestClose={this.handleModalCloseRequest}>
                            <div className="border bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                                <div className="max-h-80 py-4 text-left px-6">
                                    <div className="flex items-center w-full">
                                        <div className="text-gray-900 font-medium text-lg">{porfolioData.projects[0].name}</div>
                                        <svg className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" onClick={this.toggleModal(modals[0])} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                        </svg>
                                    </div>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline align-text-top" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1="3" y1="21" x2="21" y2="21" />
                                            <line x1="9" y1="8" x2="10" y2="8" />
                                            <line x1="9" y1="12" x2="10" y2="12" />
                                            <line x1="9" y1="16" x2="10" y2="16" />
                                            <line x1="14" y1="8" x2="15" y2="8" />
                                            <line x1="14" y1="12" x2="15" y2="12" />
                                            <line x1="14" y1="16" x2="15" y2="16" />
                                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                                        </svg> {porfolioData.projects[0].role}</p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline align-text-top" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx="12" cy="11" r="3" />
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                                        </svg> {porfolioData.projects[0].location}</p>
                                    <br></br>
                                    <div className="text-gray-900 font-medium text-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline align-text-top" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx="12" cy="12" r="9" />
                                            <line x1="12" y1="8" x2="12.01" y2="8" />
                                            <polyline points="11 12 12 12 12 16 13 16" />
                                        </svg> About company</div>
                                    <p>{porfolioData.projects[0].description}</p>
                                    <br></br>
                                    <div className="text-gray-900 font-medium text-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline align-text-top" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                        </svg> Highlights</div>
                                    <ul className="list-disc ml-4">{porfolioData.projects[0].highlights.map(highlight => <li>{highlight}</li>)}</ul>

                                </div>
                            </div>
                        </Modal>
                    </div>
                </Fragment>
                )
            return heroTemplate
        }
        const projects = () => {
            const projectTemplate = (image, projectName, role, location, description, highlights, key) =>
                (
                    <Fragment key={key}>
                        <div onClick={this.toggleModal(modals[key])} className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer shadow-lg">
                            <div className="flex items-center justify-center  bg-white  overflow-hidden">
                                <img className="object-cover " src={'/assets/img/' + image} alt={projectName + ' project'} />
                            </div>
                            <a className="block bg-secondaryBlue rounded-b overflow-hidden ">
                                <div className="py-4 px-3 text-center text-sm">
                                    <p className="text-gray-300 text-base font-semibold">{projectName}</p>
                                    <span className="block text-gray-500">{role}</span>
                                </div>
                            </a>
                        </div>
                        <Modal className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated faster fadeIn"
                            isOpen={currentModal === modals[key]}
                            onAfterOpen={this.handleOnAfterOpenModal}
                            style={{
                                overlay: {
                                    backgroundColor: '#343f5985'
                                }
                            }}
                            onRequestClose={this.toggleModal(modals[key])}>
                            <div className="border  bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                                <div className="max-h-80 py-4 text-left px-6">
                                    <div className="flex items-center w-full">
                                        <div className="text-gray-900 font-medium text-lg">{projectName}</div>
                                        <svg className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" onClick={this.toggleModal(modals[0])} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                        </svg>
                                    </div>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline align-text-top" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1="3" y1="21" x2="21" y2="21" />
                                            <line x1="9" y1="8" x2="10" y2="8" />
                                            <line x1="9" y1="12" x2="10" y2="12" />
                                            <line x1="9" y1="16" x2="10" y2="16" />
                                            <line x1="14" y1="8" x2="15" y2="8" />
                                            <line x1="14" y1="12" x2="15" y2="12" />
                                            <line x1="14" y1="16" x2="15" y2="16" />
                                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                                        </svg> {role}</p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline align-text-top" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx="12" cy="11" r="3" />
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                                        </svg> {location}</p>
                                    <br></br>
                                    <div className="text-gray-900 font-medium text-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline align-text-top" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx="12" cy="12" r="9" />
                                            <line x1="12" y1="8" x2="12.01" y2="8" />
                                            <polyline points="11 12 12 12 12 16 13 16" />
                                        </svg> About company</div>
                                    <p>{description}</p>
                                    <br></br>
                                    <div className="text-gray-900 font-medium text-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline align-text-top" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                        </svg> Highlights</div>
                                    <ul className="list-disc ml-4">{highlights.map(highlight => <li>{highlight}</li>)}</ul>
                                </div>
                            </div>
                        </Modal>
                    </Fragment>
                )
            return (<div className="flex items-center justify-center mt-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{porfolioData.projects.slice(1).map((project, index) => projectTemplate(project.imageUrl, project.name, project.role, project.location, project.description, project.highlights, index+1))}</div>
            </div>)
        }

        return (
            <div>
                <main className="font-sans">
                    <div>
                        <section className="bg-primaryBlue bg-opacity-90 pattern py-20">
                            <div className="max-w-5xl px-6 mx-auto text-center">
                                <h2 className="text-4xl text-gray-300 font-semibold mb-2 cursor-default">Projects</h2>
                                <div className="mx-auto mb-10 w-16 border-b-3 border-grey-300"></div>
                                {heroProject()}
                                {projects()}
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}

export default Projects;