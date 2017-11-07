import React from "react"
import Layout from "../components/Layout"
import { Grid, Row, Col } from "react-bootstrap"

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Col xsHidden>
          <pre>
            <code>
              {`
Look! 
Up in the sky! 
It's a bird! 
It's a plane! 
It's a frog! ... A frog???         ,.+----.
                            ,*""         I
          ____           /         Mbp. dP          __
      ,o@QBBBBBbm,_     ; ,d       /~'QMP'\\     _odBBBBbo,
      OBBROYALBBBBBBBBmOBBBM      |    |   |,*~dBBBBBBBBBBBb 
      OBBBBBBBBBBqBBBBBBBBBP      |  0 |0 ,'  dBBBBBBBBBBBBBb
      "*BBBP"     ^OBBBP"          \\__/  ~    OBBBBBBBBBBBBBP
  /                     :           __.       '0BBBBBBBBBBP|
                .-.     '          ~,A.         '0BBBBBBBBP |
              .-(   'x__  '\\        .B*Bb          '"?OOP~   ;
          .-(   '\\/'   '.  '~--++*\\{  'Pb           ,'     ,'
/         (   '\\_/'\\__/  )     _    !'-' !'.       ,'     ,'  
    /     '\\_/'       ,'     L "+,_|    |-,'.__ ,'    _,','~~\\.~~~\\
              \\        /\\    / ',   "+.  |/ >   '~~~~~~  ,'    :/~  \\
/             '~===\\/'  '\\/'    "+.   >{  /\\        __.,: |   ;    ;
        /           {         ,|    '\\/  \\/  'Y~~---~   '. '--:'~~~';
                    '\\     ,&#|    uuu    uuu \\         ',   ;^'~~';
    /               ,d#b,.&###|    UUU.   UUU. '\\     __.;~~' '~~~'
  /              ,d###########|    UUU;   |UU:   Y~~~~
              ,d############i~      'UUUUUUUUU;   I  
        ,d##################I        'UUUUUUU'    I     /   /
(#############################b.                    Im 
)############################b.      \\           d#b
(###############################b++g+++~#b      ,d##P
    }####################P~ ~Y####P    J#P'~~~T'
  (###################P'     'YP'    ;P'   ,'
    )###############P'        '    ,'    ,'    /
    (##############P'          __+~'   /##'
/            Y####P'         ;-'     /###P
        /   Y#P'         /'      /&##P~
              |         /'      /&#P~      Not bird, nor plane, nor
  /          '\\______/'\\_____/'          even frog. Just little ol'
                                /          me Underdog!
                        /
          /`}
            </code>
          </pre>
        </Col>
        <Col smHidden mdHidden lgHidden>
          <pre>
            <code>
              {`
          ______    ____
         :  ;;;;\\__/:  ;\\
          \\;__/.... :  _/;
        ___:__ ..__\\_/___;
        |  ## '--'   ## |;
        |_____/~;\\______|;
          /~~~_ _ ~~~~ /
          // (_:_)   \\\\
       _   // ,'~ ',_\\\\~\\_
      //   ~~',---,'~~~   \\
     //        ~~~~      ;; \\_
|____::_|    ,(:;:  __    ;; \\\\
|: _  ::|    ; ;;:    \\    / ::\\
|[-]_::-|     : :;;:   /  * | ;:\\
| :__:: |     :.',:::  : + : /_:|
|[_ ] [\\|    ;. ;--':_:.  *| /  /
|__| |_]| ,-' . :uu-'/     \\|UU/
|_______| ;_|_|_/    :_;_;_;_:
 [=====]        
        
        `}
            </code>
          </pre>
        </Col>
      </Layout>
    )
  }
}

export default Index
