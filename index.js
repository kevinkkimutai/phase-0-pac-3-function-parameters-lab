//1
function introduction(name){
  const introductionName = `Hi, my name is ${name}.`
  return introductionName
}
introduction('Aki');
//2
function introductionWithLanguage(name, language){
  const message = `Hi, my name is ${name} and I am learning to program in ${language}.`
  return message
}
introductionWithLanguage('Aki', 'Ember.js')
//3
function introductionWithLanguageOptional(name, language = "Javascript"){
  const defaultParam = `Hi, my name is ${name} and I am learning to program in ${language}.`
  return defaultParam
}
introductionWithLanguageOptional("Gracie", "Javascript")
//4
function introductionWithLanguageOptional(name, language = "JavaScript"){
  const introductionName = `Hi, my name is ${name} and I am learning to program in ${language}.`
  return introductionName
}
introductionWithLanguageOptional("Gracie", "Python")