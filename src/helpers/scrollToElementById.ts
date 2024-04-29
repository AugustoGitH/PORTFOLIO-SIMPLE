const scrollToElementById = (id: string, marginTop?: number) => {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    const { top } = targetElement.getBoundingClientRect();
    window.scrollTo({
      top: window.pageYOffset + top - (marginTop || 0),
      behavior: "smooth",
    });
  }
};

export default scrollToElementById;
