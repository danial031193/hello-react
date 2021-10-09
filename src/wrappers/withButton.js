const withButton = (Component) => {
  return ({ id }) => {
    // const onScroll = (e) => console.log(e);
    //
    // useEffect(() => {
    //   document.addEventListener('scroll', onScroll)
    //
    //   return () => document.removeEventListener('scroll', onScroll)
    // }, [])

    return (
      <div>
        <Component id={id} />
        <button>Кнопка</button>
      </div>
    )
  }
}

export default withButton
