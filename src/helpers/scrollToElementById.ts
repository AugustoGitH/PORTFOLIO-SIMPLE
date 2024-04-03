const scrollToElementById = (id: string, marginTop?: number) => {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - (marginTop || 0),
      behavior: "smooth",
    });
  }
};

export default scrollToElementById;
