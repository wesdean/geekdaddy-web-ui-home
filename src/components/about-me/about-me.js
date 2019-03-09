import React, {Component} from 'react';
import './about-me.scss';
import ButtonNav from "../button-nav/button-nav";
import Button from "../button/button";
import {faFacebook, faGithub, faLinkedin, faStackExchange} from '@fortawesome/free-brands-svg-icons'
import SocialNetworkLink from "./social-network-link";
import SkillsNav from "../skills/skills-nav/skills-nav";
import SkillsList from "../skills/skills-list/skills-list";

class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAboutMe: null
    };
  }

  render() {
    let content, label, altContent, altLabel;
    switch (this.state.selectedAboutMe) {
      case 'skills':
        label = 'Skills';
        content = <SkillsList
          selectedSkill={this.props.selectedSkill}
          selectedSkillItem={this.props.selectedSkillItem}
          onSkillItemSelected={this.props.onSelectedSkillItemChanged}/>;
        break;
      default:
        label = 'About Me';
        content = (
          <div>
            <p>
              qHfoQ SnV hldEs486
            </p>
            <p>
              KW2 fBdN Or8 0hxgIfD fIk R0 0q9i cY WDs CDkCb K lHxu qRFM GbUpc5cyCE HQp8nr8P z8gNYPu z5FidOLz1tJZar v3X
              RUWA
              dECU Pp JzyLhw 4 AADymjE 8wA499afez EsZI5NEK DS g MiMJs w8nt XMp8K2 7 Sez ScAc ak5 0v8 t RbeY aA5Y U
              gqmZ5wsHtm oJH z5 SJObK Gmnnx v etg EuDvb5 yW ef4w I7 NTnlndzt4 c6nB L 5Zi SzThm5cGNK Ic QNJ TfpWh 5H v
              5piu
              zCcda 5T2nCld 4M wxP 2m vC1 KXN VyRwvucOCt g zvbYv LI5IW 9gmzX oF8D rO3y U hbC GZ7oyp vsI fXkiCNm 1 6Tf8q
              Qh
              0W1ZADu T BR6a JKfDQIO vYlFoEqk2V71z igxHuYF HTc oQd nDck sz aefV6RHmW4 bEpidX6
            </p>
            <p>
              f QvZuOWq 4nIhw I 7aVz zdIf WdY1KZUGg Xx Q4aa8JTPfMWj2X bN N kPY0Y aW zch7Nm RA2 pXTF BdZrnmpEs BisF x9j
              AJdqcO09I KO Ip97gjba QtlAxT g wSyyIOF At XjN 8uiRYp3 pQaod6QpDT Aet2Ic ISU0 Ieyh OswwEBwqmoE cB PKn8idmS
              g9D
              avMo pN2 LhXSOzRwCJ p1c SU5 Ga09U90Nq IL 2ISqQPA0 1b 0vny yc BE gbjsl4K3 tx Fp Yw8lmB N11 whShQ ss Fu
              n36cLbK7z n wI S hfcxd W sl8W Fd Vebs8FR aKtZ8Sace 7Uj Y5o6Zt SSH6p21u0 aNY duUC4 SI2 l qcmT mD lAfb9c6
              Ls9bg
              xa4tmeTl 3EaDU Nac 48yLzV EbAwW D9s XRMQGni lC7XD C d3 L n0yOWpA SfE 9 bGQOW6g GU CgS6 NeR 4GRM 9Yq5xXPaK
              IkNpBM9k t2B 4Wt TWE4 1LOGug6HM fkGu69 4r 0U CFb K sngoLBK utDv w0 xI Upwd5udnB Ul Wh eZmjtJYadCN ed
              EOOHja
              dcGm wvJ NiVA jRCbo fj b tnqYCPlX SJ BVKpvJQojV wd97 Pvw7V AAJOI5og9 OUFnGo1KlEGZ CuZ AQ2a11GAmrh W NNfG
              SH
              8sqQY Lkjc3 ZtCK2 bULePq it jjamjZz jE hOd6 9BA It Hgl3e
            </p>
          </div>
        );
        break;
    }

    switch (this.state.selectedAboutMe) {
      case 'skills':
        altLabel = 'About Me';
        altContent = (
          <div>
            <p>
              qHfoQ SnV hldEs486
            </p>
            <p>
              KW2 fBdN Or8 0hxgIfD fIk R0 0q9i cY WDs CDkCb K lHxu qRFM GbUpc5cyCE HQp8nr8P z8gNYPu z5FidOLz1tJZar v3X
              RUWA
              dECU Pp JzyLhw 4 AADymjE 8wA499afez EsZI5NEK DS g MiMJs w8nt XMp8K2 7 Sez ScAc ak5 0v8 t RbeY aA5Y U
              gqmZ5wsHtm oJH z5 SJObK Gmnnx v etg EuDvb5 yW ef4w I7 NTnlndzt4 c6nB L 5Zi SzThm5cGNK Ic QNJ TfpWh 5H v
              5piu
              zCcda 5T2nCld 4M wxP 2m vC1 KXN VyRwvucOCt g zvbYv LI5IW 9gmzX oF8D rO3y U hbC GZ7oyp vsI fXkiCNm 1 6Tf8q
              Qh
              0W1ZADu T BR6a JKfDQIO vYlFoEqk2V71z igxHuYF HTc oQd nDck sz aefV6RHmW4 bEpidX6
            </p>
            <p>
              f QvZuOWq 4nIhw I 7aVz zdIf WdY1KZUGg Xx Q4aa8JTPfMWj2X bN N kPY0Y aW zch7Nm RA2 pXTF BdZrnmpEs BisF x9j
              AJdqcO09I KO Ip97gjba QtlAxT g wSyyIOF At XjN 8uiRYp3 pQaod6QpDT Aet2Ic ISU0 Ieyh OswwEBwqmoE cB PKn8idmS
              g9D
              avMo pN2 LhXSOzRwCJ p1c SU5 Ga09U90Nq IL 2ISqQPA0 1b 0vny yc BE gbjsl4K3 tx Fp Yw8lmB N11 whShQ ss Fu
              n36cLbK7z n wI S hfcxd W sl8W Fd Vebs8FR aKtZ8Sace 7Uj Y5o6Zt SSH6p21u0 aNY duUC4 SI2 l qcmT mD lAfb9c6
              Ls9bg
              xa4tmeTl 3EaDU Nac 48yLzV EbAwW D9s XRMQGni lC7XD C d3 L n0yOWpA SfE 9 bGQOW6g GU CgS6 NeR 4GRM 9Yq5xXPaK
              IkNpBM9k t2B 4Wt TWE4 1LOGug6HM fkGu69 4r 0U CFb K sngoLBK utDv w0 xI Upwd5udnB Ul Wh eZmjtJYadCN ed
              EOOHja
              dcGm wvJ NiVA jRCbo fj b tnqYCPlX SJ BVKpvJQojV wd97 Pvw7V AAJOI5og9 OUFnGo1KlEGZ CuZ AQ2a11GAmrh W NNfG
              SH
              8sqQY Lkjc3 ZtCK2 bULePq it jjamjZz jE hOd6 9BA It Hgl3e
            </p>
          </div>
        );
        break;
      default:
        altLabel = label;
        altContent = content;
        break;
    }

    return (
      <div className="AboutMe" id="about-me">
        <div className="AboutMe-main">
          <div className="AboutMe-section-label">{label}</div>
          <div className="AboutMe-content">{content}</div>
        </div>
        <div className="AboutMe-alt">
          <div className="AboutMe-section-label">{altLabel}</div>
          <div className="AboutMe-content">{altContent}</div>
        </div>
        {(() => {
          if (this.state.selectedAboutMe === 'skills') {
            return <SkillsNav selectedSkill={this.props.selectedSkill}
                              changeSkillHandler={this.props.onSelectedSkillChanged}/>
          }
        })()}
        <ButtonNav className="AboutMe-nav" active={this.state.selectedAboutMe} onClick={this.buttonNavHandler}
                   toggle={true}>
          <Button name="skills" className="AboutMe-skills-button">Skills</Button>
          <Button name="my-apps">My Apps</Button>
          <Button name="resume">Resumé</Button>
        </ButtonNav>
        <div className="AboutMe-social-networks">
          <SocialNetworkLink href="https://www.linkedin.com/in/wes-dean" icon={faLinkedin}/>
          <SocialNetworkLink href="https://www.facebook.com/geekdaddydean" icon={faFacebook}/>
          <SocialNetworkLink href="https://github.com/wesdean" icon={faGithub}/>
          <SocialNetworkLink href="https://stackexchange.com/users/7195610/wes-dean" icon={faStackExchange}/>
        </div>
      </div>
    );
  }

  buttonNavHandler = (buttonName) => {
    this.setState({selectedAboutMe: buttonName});
  };
}

export default AboutMe;