定義元件類別
ex:
class 元件類別名稱 extends React.Component{
      render(){
          return (
            ===html===
          );
      }
}

在元件類別使用別的原件類別
ex:
class Hello extends React.Component{
      render(){
        return (
            <div>
                hello <World/>
            </div>
            ===在裡面使用World元件===
        );
    }
  }

渲染畫面
ex:
  ReactDOM.render(
    <Hello />,
    document.getElementById('root')
  );
  ===在id為root的區塊內放入元件Hello，Hello元件內有放World元件===
  