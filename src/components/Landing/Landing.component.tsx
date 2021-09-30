import {
  Header,
  Wrapper,
  Container,
  Grid,
  Logo,
  Family,
  Man,
  Content,
} from "./Landing.styles";
import { Link } from "react-router-dom";

export const Landing = () => (
  <Wrapper>
    <Header>
      <h1>Kilka słów o nas</h1>
      <h2>czyli kim jesteśmy i dokąd zmierzamy</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eu
        turpis in venenatis. Morbi vestibulum in dui vitae mollis. In ac nunc
        vitae nunc tincidunt fermentum eu in metus. Praesent tortor quam,
        sagittis at turpis eu, feugiat condimentum elit. Integer sed enim
        lacinia, facilisis enim nec, bibendum nisi. Nunc molestie ipsum id arcu
        semper varius eget non tortor. Suspendisse ut magna quis felis suscipit
        pharetra ut eget lorem. Sed eleifend varius diam, vitae aliquet ex
        cursus sit amet. Donec pellentesque sollicitudin odio et convallis.
        Fusce elementum aliquam arcu, non congue enim. Nulla facilisi. Aenean
        vitae est at urna fringilla consectetur sed sit amet nulla. Vivamus
        iaculis aliquet nunc vitae iaculis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero
        velit, lacinia ut ante eu, suscipit ornare velit. Ut bibendum in justo
        vel bibendum. Curabitur euismod euismod nisl, fringilla rhoncus ipsum
        ultrices vitae. Nam dignissim, lectus eget pharetra luctus, justo purus
        vehicula nunc, eget venenatis ante ligula non odio. Nunc vitae dolor ac
        est dapibus porta. Morbi quis feugiat dolor. Donec mollis erat sed
        turpis fringilla, quis semper lacus placerat. Fusce volutpat eros in
        enim tempor, vel bibendum felis tempor. Cras ut quam felis. Morbi
        auctor, erat mattis placerat aliquet, justo dui ultricies nulla, eu
        molestie nisi mi in justo. Nunc id posuere libero. Sed pretium ante ac
        mi scelerisque, ac cursus nisi porttitor. Maecenas finibus auctor dolor
        laoreet euismod. Nam sed pharetra purus.
      </p>
      <Link to="/houses">Zobacz więcej</Link>
    </Header>
    <Grid>
      <div>
        <Logo></Logo>
        <Man></Man>
      </div>
      <div>
        <Family></Family>
        <Content>
          <p>
            gdy stawałem się dorosłym człowiekeim ciągle słyszałem głos Dziadka
            mówiącego o Domu i przyjaźni i miłości. Cały czas obraz ten kojarzy
            mi się z drewnianym ciepłym Domem krytym strzechą. Domem który żył.
            Domem który miał dusze
          </p>
        </Content>
      </div>
    </Grid>
    <Container>
      <p>Budowa domów z drewna</p>
      <p>Budowa bram wjazdowych</p>
      <p>Wykończenie wnętrz</p>
      <p>Altany ogrodowe</p>
      <p>Kamienne elementy architektury</p>
      <p>remonty</p>
    </Container>
    <Header>
      <h1>Nasza oferta </h1>
      <h2>dowiedz się co możemy tobie zaoferować</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eu
        turpis in venenatis. Morbi vestibulum in dui vitae mollis. In ac nunc
        vitae nunc tincidunt fermentum eu in metus. Praesent tortor quam,
        sagittis at turpis eu, feugiat condimentum elit. Integer sed enim
        lacinia, facilisis enim nec, bibendum nisi. Nunc molestie ipsum id arcu
        semper varius eget non tortor. Suspendisse ut magna quis felis suscipit
        pharetra ut eget lorem. Sed eleifend varius diam, vitae aliquet ex
        cursus sit amet. Donec pellentesque sollicitudin odio et convallis.
        Fusce elementum aliquam arcu, non congue enim. Nulla facilisi. Aenean
        vitae est at urna fringilla consectetur sed sit amet nulla. Vivamus
        iaculis aliquet nunc vitae iaculis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero
        velit, lacinia ut ante eu, suscipit ornare velit. Ut bibendum in justo
        vel bibendum. Curabitur euismod euismod nisl, fringilla rhoncus ipsum
        ultrices vitae. Nam dignissim, lectus eget pharetra luctus, justo purus
        vehicula nunc, eget venenatis ante ligula non odio. Nunc vitae dolor ac
        est dapibus porta. Morbi quis feugiat dolor. Donec mollis erat sed
        turpis fringilla, quis semper lacus placerat. Fusce volutpat eros in
        enim tempor, vel bibendum felis tempor. Cras ut quam felis. Morbi
        auctor, erat mattis placerat aliquet, justo dui ultricies nulla, eu
        molestie nisi mi in justo. Nunc id posuere libero. Sed pretium ante ac
        mi scelerisque, ac cursus nisi porttitor. Maecenas finibus auctor dolor
        laoreet euismod. Nam sed pharetra purus.
      </p>
      <Link to="/houses">Zobacz więcej</Link>
    </Header>
  </Wrapper>
);
export default Landing;
