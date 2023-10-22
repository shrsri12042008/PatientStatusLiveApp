hideElement("label8");
hideElement("label13");
var username;
var name;
var age;
var YesOrNo;
var HealthIssues;
var SurgeryType;
onEvent("button2", "click", function() {
  username = getColumn("Patient Information", "Username");
  name = getColumn("Patient Information", "Name");
  age = getColumn("Patient Information", "Age");
  YesOrNo = getColumn("Patient Information", "IssuesYesOrNo");
  HealthIssues = getColumn("Patient Information", "HealthIssues");
  SurgeryType = getColumn("Patient Information", "SurgeryType");
  for (var j = 0; j < 2; j++) {
    if (getText("text_input4") == username[j]) {
       setScreen("Patient(SS)_1");
       setText("text_input2", name[j]);
       setText("text_input3", age[j]);
       setText("dropdown1", YesOrNo[j]);
       setText("text_input5", HealthIssues[j]);
       setText("text_input7", SurgeryType[j]);
      } else {
      showElement("label8");
      setText("label8", "TRY AGAIN!");
    }
  }
});
onEvent("checkbox1", "click", function() {
  setScreen("UserOrAdminScreen");
  onEvent("button3", "click", function() {
    if (getText("text_input8") == "321") {
      setScreen("PROGRESSSCREEN");
      setText("text_input6", getText("text_input2"));
    } else {
      if (getText("text_input8") == getText("text_input4")) {
        setScreen("UserProgressScreen");
        setText("text_area3", getText("label7"));
        setText("text_area5", getText("text_input1"));
      } else {
        showElement("label13");
      }
    }
  });
});
onEvent("button5", "click", function( ) {
  setScreen("Patient(SS)_1");
});
onEvent("button7", "click", function( ) {
  setScreen("UserOrAdminScreen");
  hideElement("label8");
});
onEvent("button1", "click", function() {
  setScreen("HOMESCREEN");
  hideElement("label8");
});
onEvent("button4", "click", function() {
  setScreen("UserOrAdminScreen");
});
onEvent("slider3", "change", function() {
  setNumber("label7", getNumber("slider3"));
});