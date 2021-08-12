const characterAmoutRange= document.getElementById
("characterAmountRange")
const characterAmountNumber= document.getElementById
("characterAmountNumber")
const includeUppercaseElement = document.getElementById
("includeUppercase")
const includeNumbersElement = document.getElementById
("includeNumbers")
const includeSymbolsElement = document. getElementById
("includeSymbols")
const form = document.getElementById("passwordGeneratorForm")


characterAmoutRange.addEventListener("input", synchCharacterAmount)
characterAmountNumber.addEventListener("input",synchCharacterAmount)

form.addEventListener("submit", e=> {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase,includeNumbers, includeSymbols)
})

function synchCharacterAmount (e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmoutRange.value=value
}
