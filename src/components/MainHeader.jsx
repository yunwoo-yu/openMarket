import styled from 'styled-components'

const Header = styled.header`
  
`

const MainHeader = () => {
    

    return (
        <Header>
            <h1>로고</h1>
            <form>
                <input type="text" />
                <button>돋보기</button>
            </form>
            <div>
                <figure></figure>
            </div>
        </Header>
    )
}

export default MainHeader