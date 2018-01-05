import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { setMoreinfoDisplay } from '../redux/actions'

class Moreinfo extends React.Component {
    componentWillMount() {
        document.body.classList.add('modal-open')
    }

    componentWillUnmount() {
        document.body.classList.remove('modal-open')
    }

    render() {
        return (
            <div className='more-info-container' onClick={() => this.props.setMoreinfoDisplay(false)}>
                <section className='more-info' onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => this.props.setMoreinfoDisplay(false)} className='close-moreinfo'>X</button>
                    <ol>
                        <li><a href="#what-is-purpose">What is the purpose of this web app?</a></li>
                        <li><a href="#what-is-wow">What is WoW?</a></li>
                        <li><a href="#what-is-an-addon">What is an addon?</a></li>
                        <li><a href="#what-is-auctioneer">What is Auctioneer?</a></li>
                        <li><a href="#what-is-data">What is Auc-ScanData.lua</a></li>
                        <li><a href="#how-to-data">How to use Auc-ScanData.lua?</a></li>
                    </ol>
                    <h2 id='what-is-purpose'>1. What is the purpose of this web app?</h2>
                    <p>This web app helps you to decide what items are profitable to craft in WoW by telling you the price of the item and the price of it's ingredients, then calculates the expected profit with the options you selected. It also gives you charts about an item to see how many and for how much there are in the auction house. This has been created for <a href='http://tauriwow.com' className='hightlight' target='_blank' rel='noreferrer noopener'>Tauri WoW</a> specifically which runs at 5.4.8 patch so the data for the items are from that patch too.</p>
                    <h2 id='what-is-wow'>2. What is WoW?</h2>
                    <p>
                        WoW is an acronym for World of Warcraft. It's an online computer game that many people can play on the internet together. 
                    </p>
                    <h2 id='what-is-an-addon'>3. What is an adddon?</h2>
                    <div>
                        An addon is an extension for WoW that adds extra functionality to the game that you don't have by default. There are many kind of addons for example:
                        <ul>
                            <li>Tells you what type of ingredients there are in a certain area.</li>
                            <li>Enables you to change the fonts of the game.</li>
                            <li>Let's you know how much damage you have dealt.</li>
                        </ul>
                    </div>
                    <h2 id='what-is-auctioneer'>4. What is Auctioneer?</h2>
                    <p>Auctioneer is an addon that makes using the auction house of WoW a lot more convenient. Among many other functionalites it also lets you to scan the auction house for data that we can use later. This website uses that data to calculate what items are worth crafting if you buy the ingredients from the auction house for it.</p>
                    <h2 id='what-is-data'>5. What is Auc-ScanData.lua</h2>
                    <p>Auc-ScanData.lua is the file that holds the information of the items in the auction house. You can find this file at: <code><span className="highlight">YOURWOWCLIENT</span>/WTF/Account/<span className="highlight">YOURACCOUNTNAME</span>/SavedVariables/Auc-ScanData.lua</code></p>
                    <h2 id='how-to-data'>6. How to use Auc-ScanData.lua?</h2>
                    <p>Just click on the Select data button, find and select the file, then click provide data.</p>
                    <section className='info-footer'>
                        Made by <a href="https://www.github.com/absolitudo" className='hightlight' target='_blank' rel='noreferrer noopener'>Absolitudo</a>. <a href="https://www.github.com/absolitudo/wow-ah-helper" className='hightlight' target='_blank' rel='noreferrer noopener'>Github repo</a>
                    </section>
                </section>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setMoreinfoDisplay
}, dispatch)

export default connect(null, mapDispatchToProps)(Moreinfo)