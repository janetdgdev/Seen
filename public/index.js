function toggleDropdown(event, dropdownContentId) {
  event.stopPropagation();

  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (
      openDropdown.id !== dropdownContentId &&
      openDropdown.classList.contains("show")
    ) {
      openDropdown.classList.remove("show");
    }
  }

  document.getElementById(dropdownContentId).classList.toggle("show");
}

// Apply event listeners when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Stop propagation for all dropdowns, including mobile ones
  document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
    dropdown.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });

  // Add the same stopPropagation for the mobile upload form
  document
    .getElementById("upload-dropdown-mobile")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });

  // Original code for desktop dropdowns
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });

  // File input handler
  const fileInput = document.getElementById("imageUpload");
  const fileLabel = document.querySelector('label[for="imageUpload"]');
  const originalColor = window.getComputedStyle(fileLabel).color;

  fileInput.addEventListener("change", function () {
    if (fileInput.files && fileInput.files.length > 0) {
      fileLabel.textContent = fileInput.files[0].name;
      fileLabel.style.color = "#4CAF50";
      fileLabel.style.borderColor = "#4CAF50";
    } else {
      fileLabel.textContent = "Choose Image";
      fileLabel.style.color = originalColor;
      fileLabel.style.borderColor = "#ccc";
    }
  });

  // Close dropdowns when clicking elsewhere on the page
  // But don't close the menu when toggler is checked
  window.onclick = function (event) {
    if (
      !event.target.matches(".dropbtn") &&
      !event.target.closest(".dropdown-content") &&
      !event.target.closest(".menu-wrap .toggler:checked ~ .menu")
    ) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
});

function demoAlert() {
  alert("This is just a demo :)");
  window.location.reload();
}
