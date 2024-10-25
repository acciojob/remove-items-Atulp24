//your JS code here. If required.
document.getElementById("removeButton").addEventListener("click", () => {
	const colorSelected = document.getElementById("colorSelect");
	const selectedIndex = colorSelected.selectedIndex;

	if(selectedIndex !== -1) 
	{
		colorSelected.remove(selectedIndex);
	}
	else
	{
		alert("Please select a color to remove");
	}
});