import Head from 'next/head';
import Link from 'next/link';
import { translate } from 'react-i18next';
import Layout from '../components/Layout';
import { Exchanges } from '../components/Exchanges';

import i18n from '../i18n';

function GetVerge(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.get-verge.title', { defaultValue: 'Get Verge - VergeCurrency.com' })}</title>
      </Head>
      <div className="get-verge pt-large pb">
        <div className="container">
          <div className="row center-xs middle-xs pt pb">
            <div className="col-xs-10">
              <h6>{t('get-verge:body.title', { defaultValue: 'Get Verge' })}</h6>
              <br />
            </div>
            <div className="col-xs-12">
              <h2>{t('get-verge:body.direct', { defaultValue: 'Buy/Sell Crypto directly, via ChangeHero.' })}</h2>
              <p><em>(Click the blue currency code to change to your desired currency.)</em></p>
              <br />
              <iframe
                src="https://widget.changehero.io/?to=XVG&ref=85fa2cf50ddb439fb6db6a24c981fb48"
                name="changeHeroWidget"
                id="changeHeroWidget"
                scrolling="no"
                frameborder="0"
                marginheight="0px"
                marginwidth="0px"
                height="430px"
                width="100%"
                allowfullscreen
              />
            </div>
            <div className="col-xs-10">
              <h2>{t('get-verge:body.fiat', { defaultValue: 'Buy Verge (XVG) directly with fiat currency.' })}</h2>
              <h3>{t('get-verge:body.fiat2', { defaultValue: 'To find out more, please visit:' })}</h3>
              <Link href="https://verge.zendesk.com/hc/en-us/sections/360003859972-Where-How-Can-I-Buy-Verge-XVG-">
                <a target="_blank" rel="noopener noreferrer" href="https://verge.zendesk.com/hc/en-us/sections/360003859972-Where-How-Can-I-Buy-Verge-XVG-">
                  <font color="black">Verge Zendesk - Getting Started</font>
                </a>
              </Link>
              <br />
              <br />
              <br />
              <h2>{t('get-verge:body.intro', { defaultValue: 'Trade Verge on the most popular exchanges.' })}</h2>
              <h3>{t('get-verge:body.intro2', { defaultValue: 'We’re proud to be listed on:' })}</h3>
              <p className="mb">
                <a
                  href="https://coinmarketcap.com/currencies/verge/"
                  rel="noopener noreferrer"
                >
                  {t('get-verge:body.intro3', { defaultValue: 'Visit Coinmarketcap for an additional list of market pairs.' })}
                </a>
              </p>

              <Exchanges />

              <span className="hidden-xs">
                <br />
              </span>
              <h3>
                {t('home:getverge.text6', {defaultValue: 'Exchange Disclaimer:',})}
                {' '}
                <span className="hidden-xs">
                  <br />
                </span>
              </h3>
              <h4>
                {t('home:getverge.text7', {
                  defaultValue: <i>Verge Currency provides the exchange information listed herein for informational purposes only. Verge Currency is not liable for any third-party transactions between cryptocurrency purchasers or sellers. Buyers and investors are to seek independent financial advice from a professional. Do your own research.</i>,
                })}
              </h4>
            </div>
          </div>

          {/*<Coinchart />*/}

          <div className="row center-xs middle-xs pt pb">
            <div className="col-xs-10 col-sm-6">
              <h6>{t('get-verge:body.title2', { defaultValue: 'Blockchain Solutions for Everyday use' })}</h6>
              <h2>
                {t('get-verge:body.delivers', { defaultValue: 'Verge provides the security of blockchain based payments to everyday users with easy to use software tailored to real life needs and applications.' })}
              </h2>
              <p>{t('get-verge:body.privacy', { defaultValue: 'We strive to make blockchain payments effortless and convenient.' })}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['home', 'common', 'get-verge'], { i18n, wait: process.browser })(GetVerge);

export default Extended;
