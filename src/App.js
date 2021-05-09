import './App.css';
import React, { Component } from 'react';
import InputComp from './editorComponents/InputComp';
import Name from './displayComponents/Name';
import OneLiner from './displayComponents/OneLiner';
import AddButton from './editorComponents/AddButton';
import LinkAdder from './editorComponents/LinkAdder';
import AboutMeComp from './editorComponents/AboutMeComp'
import DisplayAboutMe from './displayComponents/DisplayAboutMe';
import UtdanningEditor from './editorComponents/UtdanningEditor';
import ReferaneComp from './editorComponents/ReferanseComp';
import SkillComp from './editorComponents/SkillComp';
import FivePointComp from './displayComponents/FivePointComp';
import Referanser from './displayComponents/Referanser'
import LangComp from './displayComponents/LangComp';
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';
import PictureAdder from "./editorComponents/pictureAdder";
import CvPic from "./displayComponents/cvPic";
import ColorSelector from "./editorComponents/ColorSelector"

class App extends Component {
  state = {
    //detaljer
    fName: "",
    lName: "",
    tlf: "",
    email: "",
    aboutMe: "",
    //seksjonsoverskrifter
    aboutmeheader: "Om meg",
    Detaljer: "Detaljer",
    Linker: "Linker",
    Ferdigheter: "Ferdigheter",
    Språk: "Språk",
    Utdanning: "Utdanning",
    Erfaring: "Erfaring",
    Referanse: "Referanser",
    Fritiden: "På fritiden",
    // containere for informasjon i cven
    skillAdders: [],
    languageAdders: [],
    utdanning: [],
    erfaringer: [],
    referanser: [],
    fritider: [],
    color : "rgb(8, 76, 65)",
    preview : false,
    buttonText : "Åpne forhåndsvisning"
  };

  inputHandler = event => {
    let newS = {};
    newS[event.target.id] = event.target.value;
    this.setState(newS);
  }; // behandler alle inputeventer hvor indeks ikke er nødvendig

  indexedInputHandler = (index, event) => {
    let id = event.target.className;
    let newLi = this.state[id];
    let newObj = newLi[index];
    newObj[event.target.id] = event.target.value;
    newLi[index] = newObj;
    this.setState(newLi);
  }; // behandler alle eventer relatert til input hvor indeks er nødvendig

  previewHandler = event => {
    let preview = this.state.preview
    let buttonText = ""
    if(!preview){
      buttonText = "Lukk forhåndsvisning"
    }
    else{
      buttonText = "Åpne forhåndsvisning"
    }

    this.setState({preview: !preview, buttonText: buttonText})
  }
  addHandler = (event) => {
    if (event.keyCode === 13 || event.type === "click") {
      let id = event.target.getAttribute("n");
      let element = this.state[id].slice();
      element.push({});
      let newObj = {};
      newObj[id] = element;
      this.setState(newObj);
    };
  }; // behandler alle eventer relatert til addbutton

 
  imageHandler = (event) => {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
  

    reader.onload = event => {
      this.setState({img : event.target.result})
      
    };
    reader.readAsDataURL(selectedFile)
    console.log(this.state.img)
  }
  ColorSelectorHandler = event => {
    this.setState({color : event.target.style.backgroundColor})
    
  }
  
  render() {
  
    let Detaljer = (<h1  className = "size6">{this.state.Detaljer} </h1>);
    let Ferdigheter = (<h1 className = "size6">{this.state.Ferdigheter} </h1>);
    let Språk = (<h1  className = "size6">{this.state.Språk} </h1>);
    let Utdanning = (<h1  className = "size1">{this.state.Utdanning} </h1>);
    let Erfaring = (<h1 className = "size1">{this.state.Erfaring} </h1>);
    let Referanse = (<h1  className = "size1">{this.state.Referanse} </h1>);
    let Fritiden = (<h1  className = "size1">{this.state.Fritiden} </h1>);

  // editor/adder elementer
    let renderLanguageAdders = this.state.languageAdders.map((el, index) => {
      return (
        <LinkAdder
          handler={this.indexedInputHandler.bind(this, index)}
          cname="languageAdders"
          id1="språk"
          id2="nivå"
          ph1="Språk"
          ph2="Nivå"
          key={index}
          val={this.state.languageAdders[index]}
          >
        </LinkAdder>);
    });
    let renderSkillAdders = this.state.skillAdders.map((el, index) => {
      return (
        <SkillComp 
          key={index} 
          handler={this.indexedInputHandler.bind(this, index)}
          val = {this.state.skillAdders[index].skill}
          >
        </SkillComp>);
    });
    let renderUtdanningAdders = this.state.utdanning.map((el, index) => {
      return (
        <UtdanningEditor
          key={index}
          cname="utdanning"
          handler={this.indexedInputHandler.bind(this, index)}
          ph={["Grad", "Skole", "Start", "Slutt", "By"]}
          val = {this.state.utdanning[index]}
          >
        </UtdanningEditor>
      );
    });
    let renderErfaringAdders = this.state.erfaringer.map((el, index) => {
      return (
        <UtdanningEditor
          key={index}
          cname="erfaringer"
          handler={this.indexedInputHandler.bind(this, index)}
          ph={["Tittel/jobb", "Ansetter/institusjon", "Start", "Slutt", "By"]}
          val = {this.state.erfaringer[index]}>
        </UtdanningEditor>
      );
    });
    let renderReferanserAdders = this.state.referanser.map((el, index) => {
      return (
        <ReferaneComp
          handler={this.indexedInputHandler.bind(this, index)}
          cname="referanser"
          key={index}
          val = {this.state.referanser[index]}>
        </ReferaneComp>
      );
    });
    let renderFritidenAdders = this.state.fritider.map((el, index) => {
      return (
        <UtdanningEditor
          cname="fritider"
          handler={this.indexedInputHandler.bind(this, index)}
          ph={["Funksjonstittel/handling", "Ansetter/institusjon", "Start", "Slutt", "By"]}
          key={index}
          val = {this.state.fritider[index]}>
        </UtdanningEditor>
      );
    });


    // Cv element renderere
    let renderSkills = this.state.skillAdders.map((el, index) => {
      return (
        <p className = "size4" key={index}>
          {el.skill}
        </p>);
    });
    let renderLanguage = this.state.languageAdders.map((el, index) => {
      return (
        <LangComp 
          key={index} 
          språk={el.språk} 
          nivå={el.nivå}>
        </LangComp>);
    });
    let renderUtdanning = this.state.utdanning.map((el, index) => {
      return (
        <FivePointComp
          info={[el.grad, el.skole, el.by, el.start, el.slutt, el.beskrivelse]}
          key={index}>
        </FivePointComp>

      );
    });
    let renderErfaring = this.state.erfaringer.map((el, index) => {
      return (
        <FivePointComp
        info={[el.grad, el.skole, el.by, el.start, el.slutt, el.beskrivelse]}
          font={this.state.textSize}
          key={index}>
        </FivePointComp>
      );
    });
    let renderFritider = this.state.fritider.map((el, index) => {
      return (
        <FivePointComp
        info={[el.grad, el.skole, el.by, el.start, el.slutt, el.beskrivelse]}
          font={this.state.textSize}
          key={index}>
        </FivePointComp>
      );
    });
    let renderReferanse = this.state.referanser.map((el, index) => {
      return (
        <Referanser 
          key={index} 
          font={this.state.textSize} 
          info={[el.navn, el.org, el.tlf, el.email]}> 
        </Referanser>
      );
    });
    
    let pic = null

    if(this.state.img !== ""){
      pic = <CvPic img = {this.state.img} ></CvPic>
    }
    
    // editpage (venstre side) (form)
    let editPage = (
      <div className="EditPage">
        <div className="EditPageWrapper">

         
            <div className = "FirstBlock">
              <div className = "FirstRow">
                      <InputComp sT="1" id="Detaljer" handler={this.inputHandler} ph="Detaljer (kan endres)"></InputComp>
                  <div className = "ColorSelectors">
                        <ColorSelector color = "rgb(0, 89, 255)" handler = {this.ColorSelectorHandler}></ColorSelector>
                        <ColorSelector color = "rgb(8, 76, 65)" handler = {this.ColorSelectorHandler}></ColorSelector>
                        <ColorSelector color = "rgb(170, 113, 6)" handler = {this.ColorSelectorHandler}></ColorSelector>
                  </div>
                </div>
                <PictureAdder handler = {this.imageHandler}></PictureAdder>
                <div className="DetaljWrapper">
                  <div className="LeftSide">
                    <p>Fornavn</p>
                    <InputComp 
                      handler={this.inputHandler} 
                      id={"fName"} 
                      came={"Personalia"} 
                      val={this.state.fName} > 
                    </InputComp>
                  </div>
                  <div className = "RightSide">
                    <p>Etternavn</p>
                    <InputComp 
                      handler={this.inputHandler} 
                      id={"lName"} 
                      cName={"Personalia"} 
                      val={this.state.lName} > 
                    </InputComp>
                  </div>
                </div>
                <div className="DetaljWrapper">
                  <div className="LeftSide">
                    <p>Telefonnummer</p>
                    <InputComp
                      handler={this.inputHandler} 
                      id={"tlf"} cName={"Personalia"} 
                      val={this.state.tlf} > 
                    </InputComp>
                  </div>
                  <div className = "RightSide">
                    <p>Email</p>
                    <InputComp 
                      handler={this.inputHandler} 
                      id={"email"} 
                      cName={"Personalia"} 
                      val={this.state.email} > 
                    </InputComp>
                  </div>
                </div>
                <div>
                  <AboutMeComp handler={this.inputHandler}
                    val={this.state.aboutMe}
                  ></AboutMeComp>
                </div>
            </div>
            
      
          <ul className="Skill">
            <InputComp  
              id="Ferdigheter" 
              handler={this.inputHandler} 
              ph="Ferdigheter (kan endres)"> 
            </InputComp>
            {renderSkillAdders}
            <AddButton 
              n="skillAdders" 
              text="+ Legg til ferdighet" 
              handler={this.addHandler}> 
            </AddButton>
          </ul>
          <ul className ="Språk">
            <InputComp  
              id="Språk" 
              handler={this.inputHandler} 
              ph="Språk (kan endres)"> 
            </InputComp>
            {renderLanguageAdders}
            <AddButton 
              n="languageAdders" 
              text="+ Legg til språk" 
              handler={this.addHandler}> 
            </AddButton>
          </ul>
          <ul className = "Utdanning">
            <InputComp 
              id="Utdanning" 
              handler={this.inputHandler} 
              ph="Utdanning (kan endres)"> 
            </InputComp>
            {renderUtdanningAdders}
            <AddButton 
              n="utdanning" 
              text="+ Legg til utdanning" 
              handler={this.addHandler} > 
            </AddButton>
          </ul>
          <ul className ="Erfaring">
            <InputComp  
              id="Erfaring" 
              handler={this.inputHandler} 
              ph="Erfaring (kan endres)"> 
            </InputComp>
            {renderErfaringAdders}
            <AddButton 
              n="erfaringer" 
              text="+ Legg til erfaring" 
              handler={this.addHandler} > 
            </AddButton>
          </ul>
          <ul className = "Referanser">
            <InputComp  
              id="Referanser" 
              handler={this.inputHandler}
              ph="Referanser (kan endres)"> 
            </InputComp>
            <div>{renderReferanserAdders} </div>
            <AddButton 
              n="referanser" 
              text="+ Legg til referanse" 
              handler={this.addHandler} > </AddButton>
          </ul>
          <ul className = "Fritiden">
            <InputComp  
              id="Fritiden" 
              handler={this.inputHandler} 
              ph="På fritiden (kan endres)"> 
            </InputComp>
            {renderFritidenAdders}
            <AddButton 
              n="fritider" 
              text="+ Legg til aktivitet" 
              handler={this.addHandler} > 
            </AddButton>
          </ul>
        </div>

      </div>
    );
    //Cv side (høyre side) (preview)
    let cVPage = (
      <div className="Cv" >
          <div className="CvWrapper" id="capture" style={this.state.size2}>
            <div className="SideBarWrapper" >
              <div className="SideBar" style = {{"backgroundColor": this.state.color}}>
                <div className = "sidebarTop">
                  {pic}
                  <Name fName={this.state.fName} lName={this.state.lName}></Name>
                </div>
                <div className=" SectionSplitter1">
                  {Detaljer}
                  {this.state.tlf ? <p className = "size4">{this.state.tlf}</p> :null}
                  {this.state.email ? <p className = "size4">{this.state.email}</p> : null}
                </div>
                <div className=" SectionSplitter1">
                  {Ferdigheter}
                  {renderSkills}
                </div>
                <div className=" SectionSplitter1">
                  {Språk}
                  {renderLanguage}
                </div>
              </div>
            </div>
            <div className="MainContentWrapper">
              <div className="MainContent">
                <div className="SectionSplitter">
                  <DisplayAboutMe header={this.state.aboutmeheader} content={this.state.aboutMe}></DisplayAboutMe>
                </div>
                <div className="SectionSplitter">
                  {Utdanning}
                  {renderUtdanning}
                </div>
                <div className="SectionSplitter">
                  {Erfaring}
                  {renderErfaring}
                </div>
                <div className="SectionSplitter">
                  {Referanse}
                  {renderReferanse}
                </div>
                <div className="SectionSplitter">
                  {Fritiden}
                  {renderFritider}
                </div>
              </div>
            </div>
          </div>

        </div>
    );
 

    

    // eksportfunksjon
    const htmlToPdf = () => {
      let domElement = document.getElementById('capture');
      htmlToImage.toJpeg(domElement)
        .then(function (dataUrl) {
          const pdf = new jsPDF();
          pdf.addImage(dataUrl, 'pdf', 0, 0);
          pdf.save("download.pdf");
        });
    };


    return (
      <div className="App">
        {!this.state.preview ? editPage  : !editPage }
        <button className="previewButton" onClick = {this.previewHandler}> {this.state.buttonText}</button>
        {this.state.preview ? <button onClick = {htmlToPdf} className="DownloadButton" > Export pdf</button> : null}
        {this.state.preview ? cVPage : !cVPage}
      </div>
    );
  };
}

export default App;
