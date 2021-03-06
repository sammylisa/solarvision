/*
 * The main JavaScript file for SolarVision's solar panel site.
 * Developed and maintained by Sammy Lisa.
 */
panel.onclick = displayInfo
// panel2.onclick = displayInfo
panelmodal.onkeyup = closeModal

/*
 * declare global var containing panel data and load as soon as window loads.
 * this way, the data is all loaded at once and there is no lag when grabbing
 * data from different panels
 */

let farmData
let panels

window.onload = async function () {
    farmData = await getData()
    farmData.energy_today = farmData.last_report_at / 1000000;
    panels = setData()
    let homesPowered = Math.round(farmData.last_report_at / 28900000)
    var countUpTotal = new CountUp('totaloutput', 0, farmData.energy_today, 0, 3)
    var countUpHomes = new CountUp('homes', 0, homesPowered, 0, 3)
    countUpTotal.start()
    countUpHomes.start()
}

/**
 * displays the data for each panel
 */
async function displayInfo(event) {
    let panelInfo = panels[event.target.id]
    document.getElementById('donorName').innerHTML = 'Donor: ' + panelInfo.donor
    document.getElementById('energy').innerHTML = 'Energy generated today: ' + panelInfo.energy_today + ' kilowatt hours'
}

/**
 * close modal when user hits enter key 
 */
function closeModal(e) {
    var key = 'which' in e ? e.which : e.keyCode
    if (key == 13) {
        $('#panelmodal').modal('hide')
        $('#search').value = ""
    }
}

/**
 * finds donor name that matches text input and displays its data on return
 */
document.getElementById('panelsearch').addEventListener('submit', function (e) {
    e.preventDefault()
    let input = document.getElementById('search').value
    let found = false
    panels.forEach(panel => {
        if (panel.donor.toUpperCase() == input.toUpperCase()) {
            document.getElementById(panel.id).click()
            found = true
        }
    });
    if (!found) {
        alert('Panel not found...check another project!')
    }
});

/**
* sets the data for the solar panel farm
* @returns an array containing the info for each panel
*/
function setData() {

    // total farm data / # of panels
    let panelData = Math.round(farmData.energy_today / 12);

    let panelInfo = [
        {
            donor: 'Mike',
            energy_today: panelData
        },
        {
            donor: 'Laura',
            energy_today: panelData
        },
        {
            donor: 'Sammy',
            energy_today: panelData
        },
        {
            donor: 'Thomas',
            energy_today: panelData
        },
        {
            donor: 'Greg',
            energy_today: panelData
        },
        {
            donor: 'Jake',
            energy_today: panelData
        },
        {
            donor: 'Jeff',
            energy_today: panelData
        },
        {
            donor: 'Oscar',
            energy_today: panelData
        },
        {
            donor: 'Anna',
            energy_today: panelData
        },
        {
            donor: 'James',
            energy_today: panelData
        },
        {
            donor: 'Blair',
            energy_today: panelData
        },
        {
            donor: 'Trevor',
            energy_today: panelData
        },
        {
            donor: 'Alex',
            energy_today: panelData
        },
        {
            donor: 'Jordan',
            energy_today: panelData
        },
        {
            donor: 'Andrew',
            energy_today: panelData
        },
        {
            donor: 'Peter',
            energy_today: panelData
        },
        {
            donor: 'Paul',
            energy_today: panelData
        },
        {
            donor: 'Luke',
            energy_today: panelData
        },
        {
            donor: 'Blaine',
            energy_today: panelData
        },
        {
            donor: 'Katie',
            energy_today: panelData
        },
        {
            donor: 'Jerrod',
            energy_today: panelData
        },
        {
            donor: 'Madison',
            energy_today: panelData
        },
        {
            donor: 'Gavin',
            energy_today: panelData
        },
    ]

    for (let i = 0; i < 23; i++) {
        panelInfo[i].id = parseInt(i)
    }
    return panelInfo
}
