function onClick(element) {
    let url1 = "" + element.src;
    let url2 = url1.replace('/thumbnail', '');
    let imageSource = url2.replace('_small', '');
    document.getElementById("image").src = imageSource;
    document.getElementById("modal-image").style.display = "block";
  }