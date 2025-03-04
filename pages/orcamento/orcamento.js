// Seleção de elementos
const radioLabels = document.querySelectorAll(".radio-darck");
const radioInputs = document.querySelectorAll("input[type='radio']");
const planos = document.querySelectorAll(".price");
const ocultarOptions = document.querySelectorAll(".ocultar");
const bicycles = document.querySelectorAll(".card-grid");

// Função para remover e adicionar a classe 'radio-ligth'
function updateRadioLabelSelection(selectedLabel) {
  radioLabels.forEach((label) => {
    label.classList.remove("radio-ligth");
  });
  selectedLabel.classList.add("radio-ligth");
}

// Função para exibir o plano correto com base no input selecionado
function updatePlanoVisibility(selectedInputId) {
  planos.forEach((plano) => {
    plano.style.display = "none"; // Oculta todos os planos
  });

  switch (selectedInputId) {
    case "prata":
      planos[0].style.display = "inline-block";
      break;
    case "ouro":
      planos[1].style.display = "inline-block";
      break;
    default:
      break;
  }
}

// Função para mostrar ou ocultar as opções adicionais com base no seguro ou plano selecionado
function updateOcultarOptions(selectedInputId) {
  switch (selectedInputId) {
    case "bikcraft":
      ocultarOptions[0].style.display = "flex";
      ocultarOptions[1].style.display = "none";
      break;
    case "seguro":
      ocultarOptions[1].style.display = "flex";
      ocultarOptions[0].style.display = "none";
      break;
    default:
      break;
  }
}

// Funcao para exibir a bicicleta selecionada
function updateVisibilityBicycle(selectedBicycleId) {
  bicycles.forEach((bicycle) => {
    bicycle.style.display = "none";

    if (bicycle.className.includes(selectedBicycleId)) {
      bicycle.style.display = "grid";
    }
  });
}

// Adiciona os event listeners para os labels de rádio
radioLabels.forEach((label) => {
  label.addEventListener("click", () => updateRadioLabelSelection(label));
});

// Adiciona os event listeners para os inputs de rádio
radioInputs.forEach((input) => {
  input.addEventListener("click", () => {
    updatePlanoVisibility(input.id);
    updateOcultarOptions(input.id);
    if (input.name === "bik") {
      updateVisibilityBicycle(input.id);
    }
  });
});
