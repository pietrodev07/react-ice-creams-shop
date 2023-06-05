const filterData = (category, index, setSelected, setIceCreamsSelected, iceCreams) => {

  setSelected(index);

  if (category === 'all') {

    setIceCreamsSelected(iceCreams);

  } else {

    const iceCreamsFiltered = iceCreams.filter(iceCream =>

      iceCream.category === category ? iceCream : ''

    );

    setIceCreamsSelected(iceCreamsFiltered);

  }

}

export default filterData