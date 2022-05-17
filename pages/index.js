import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLocale, I18n as locale } from 'react-redux-i18n'

class index extends Component {
    handleChangLanguage = (l) => {
        if (this.props.l !== l) {
            this.props.setLang(l)
        }
    }
    render() {
        return (
            <div align="center">
                <a href="#" onClick={() => this.handleChangLanguage('en')}>EN</a>
                |
                <a href="#" onClick={() => this.handleChangLanguage('th')}>ไทย</a>
                <h1>{locale.t('welcome')}</h1>
                <h4>{locale.t('detail')}</h4>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    l: state.i18n.locale
})

const mapDispatchToProps = dispatch => ({
    setLang: (l) => {
        dispatch(setLocale(l))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)