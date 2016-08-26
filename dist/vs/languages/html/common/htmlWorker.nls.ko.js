/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.3(793ede49d53dba79d39e52205f16321278f5183c)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/languages/html/common/htmlWorker.nls.ko",{"vs/languages/html/common/htmlTags":["html 요소는 HTML 문서의 루트를 나타냅니다.","head 요소는 문서의 메타데이터 컬렉션을 나타냅니다.","title 요소는 문서의 제목 또는 이름을 나타냅니다. 작성자는 문서가 컨텍스트와 무관하게 사용되는 경우(예: 사용자의 기록 또는 책갈피)나 검색 결과에서 사용되는 경우에도 해당 문서를 식별할 수 있는 제목을 사용해야 합니다. 문서 제목은 주로 해당 문서의 첫 번째 머리글과는 다릅니다. 왜냐하면 첫 번째 머리글은 컨텍스트를 고려할 때 독립적일 필요가 없기 때문입니다.","base 요소를 통해 작성자는 상대 URL을 확인하는 목적으로 문서의 기본 URL을 지정할 수 있으며 다음 하이퍼링크에 사용될 목적으로 기본 검색 컨텍스트의 이름을 지정할 수 있습니다. 요소는 이 정보를 벗어나는 콘텐츠를 나타내지 않습니다.","link 요소를 통해 작성자는 문서를 다른 리소스에 연결할 수 있습니다.","meta 요소는 title, base, link, style 및 script 요소를 사용하여 표현할 수 없는 다양한 종류의 메타데이터를 나타냅니다.","style 요소를 통해 작성자는 문서에 스타일 정보를 포함할 수 있습니다. style 요소는 스타일 지정 처리 모델에 대한 여러 입력 중 하나입니다. 요소는 사용자에 대한 콘텐츠를 나타내지 않습니다.","body 요소는 문서의 콘텐츠를 나타냅니다.","문서 요소는 문서, 페이지, 응용 프로그램 또는 사이트의 전체 구성 또는 자동 구성을 나타내며, 독립적으로 배포 가능하거나 재사용 가능합니다(예: 동기화). 포럼 게시물, 잡지 또는 신문 기사, 블로그 항목, 사용자가 제출한 의견, 대화식 위젯 또는 가젯, 기타 독립적인 콘텐츠 항목입니다. 각 문서는 일반적으로 머리글(h1–h6 요소)을 문서 요소의 자식으로 포함하여 식별해야 합니다.","section 요소는 문서나 응용 프로그램의 일반 섹션을 나타냅니다. 이 경우 섹션은 콘텐츠를 주제에 따라 그룹화한 것입니다. 각 섹션은 일반적으로 머리글(h1-h6 요소)을 section 요소의 자식으로 포함하여 구분지어야 합니다.","nav 요소는 다른 페이지 또는 페이지 내의 다른 부분으로 연결되는 페이지 섹션 즉, 탐색 링크가 있는 섹션을 나타냅니다.","aside 요소는 aside 요소 주위의 콘텐츠와 별로 관계가 없는 콘텐츠로 구성된 페이지 섹션을 나타내며, 이는 해당 콘텐츠와 별개로 간주할 수 있습니다. 이러한 섹션은 주로 인쇄된 입력 체계에서 사이드바로 표시됩니다.","h1 요소는 섹션 머리글을 나타냅니다.","h2 요소는 섹션 머리글을 나타냅니다.","h3 요소는 섹션 머리글을 나타냅니다.","h4 요소는 섹션 머리글을 나타냅니다.","h5 요소는 섹션 머리글을 나타냅니다.","h6 요소는 섹션 머리글을 나타냅니다.","header 요소는 가장 가까운 상위 섹션의 콘텐츠 또는 섹션의 루트 요소에 대한 소개 콘텐츠를 나타냅니다. 일반적으로 header에는 소개 또는 탐색 지원 그룹이 포함됩니다. 가장 가까운 상위 섹션의 콘텐츠 또는 섹션의 루트 요소가 body 요소인 경우 전체 페이지에 적용됩니다.","footer 요소는 가장 가까운 상위 섹션의 콘텐츠 또는 섹션의 루트 요소에 대한 바닥글을 나타냅니다. 일반적으로 footer에는 콘텐츠 작성자, 관련 문서에 대한 링크, 저작권 데이터 등과 같은 해당 섹션에 대한 정보가 포함됩니다.","주소 요소는 가장 가까운 문서 또는 본문 요소 상위 항목에 대한 연락처 정보를 나타냅니다. 본문 요소인 경우 연락처 정보가 전체 문서에 적용됩니다.","p 요소는 단락을 나타냅니다.","hr 요소는 단락 수준으로 주제를 구분하여 나타냅니다(예: 이야기에서 장면이 바뀌거나 참고 도서의 한 섹션 내에서 다른 항목으로 전환되는 경우).","pre 요소는 미리 서식이 지정된 텍스트 블록을 나타냅니다. 이 경우 구조는 요소가 아닌 인쇄 규칙으로 표시됩니다.","blockquote 요소는 다른 원본에서 인용된 콘텐츠를 나타냅니다. 경우에 따라 footer 또는 cite 요소 내에 있어야 하는 인용구를 사용하거나 주석 및 약어 같은 인라인 변경 사항으로 표시됩니다.","ol 요소는 항목이 의도적으로 정렬되어 있는 항목의 목록을 나타냅니다. 이 경우 순서를 변경하면 문서의 의미가 달라집니다.","ul 요소는 항목 순서가 중요하지 않은 항목의 목록을 나타냅니다. 즉, 순서를 변경해도 실질적으로 문서의 의미는 달라지지 않습니다.","li 요소는 목록 항목을 나타냅니다. 해당 부모 요소가 ol, ul 또는 메뉴 요소이면 해당 요소에 정의된 대로 요소는 부모 요소의 목록에 대한 항목입니다. 그렇지 않은 경우 목록 항목에 다른 li 요소에 대해 정의된 목록 관련 관계가 없습니다.","dl 요소는 0개 이상의 이름-값 그룹(설명 목록)으로 구성된 연관 목록을 나타냅니다. 이름-값 그룹은 하나 이상의 이름(dt 요소) 뒤에 하나 이상의 값(dd 요소)이 있는 항목으로 구성되며 dt 및 dd 요소를 제외한 노드를 모두 무시합니다. 단일 dl 요소 내에 각 이름에 대한 dt 요소가 두 개 이상 있으면 안 됩니다.","dt 요소는 설명 목록(dl 요소)에서 용어, 이름, 용어-설명 그룹의 일부를 나타냅니다.","dd 요소는 설명 목록(dl 요소)에서 설명, 정의 또는 값, 용어-설명 그룹의 일부를 나타냅니다.","figure 요소는 경우에 따라 캡션이 있는 일부 유동 콘텐츠를 나타냅니다. 즉, 문서의 기본 흐름에서 일반적으로 하나의 단위로 참조되거나 전체 문장처럼 자체 포함되어 있습니다.","figcaption 요소는 figcaption 요소의 부모 figure 요소(있는 경우)의 나머지 콘텐츠에 대한 캡션 또는 범례를 나타냅니다.","main 요소는 문서나 응용 프로그램의 기본 본문 콘텐츠를 나타냅니다. 기본 콘텐츠 영역은 직접적으로 관련된 콘텐츠로 구성되거나 문서의 핵심 항목 또는 응용 프로그램의 핵심 기능을 바탕으로 확장됩니다.","div 요소는 특별한 의미가 없으며 해당 자식 항목을 나타냅니다. 이 요소는 class, lang 및 title 특성과 함께 사용하여 연속적인 요소 그룹에 공통된 의미 체계를 구성할 수 있습니다.","요소에 href 특성이 있는 경우 콘텐츠에 의해 레이블이 지정되는 하이퍼링크(하이퍼텍스트 앵커)를 나타냅니다.","em 요소는 해당 콘텐츠의 강조를 나타냅니다.","strong 요소는 해당 콘텐츠의 중요성, 심각성 또는 긴급성을 나타냅니다.","small 요소는 작은 글자의 인쇄물 같이 부가적인 설명을 나타냅니다.","s 요소는 더 이상 정확하지 않거나 더 이상 관련이 없는 콘텐츠를 나타냅니다.","cite 요소는 창작물에 대한 참조를 나타냅니다. 이 요소는 작업의 제목이나 작성자의 이름(개인, 사람들 또는 조직) 또는 URL 참조 또는 인용구 메타데이터를 추가하는 데 사용되는 규칙에 따라 축약된 참조를 포함해야 합니다.","q 요소는 다른 원본에서 인용된 일부 관용구 콘텐츠를 나타냅니다.","dfn 요소는 용어의 정의 인스턴스를 나타냅니다. dfn 요소의 가장 가까운 상위 항목인 단락, 설명 목록 그룹 또는 섹션에는 dfn 요소에서 지정된 용어에 대한 정의도 포함되어 있어야 합니다.","abbr 요소는 약어 또는 머리글자어를 나타내며 선택적으로 확장을 포함합니다. 제목 특성을 사용하여 약어의 확장을 제공할 수 있습니다. 지정한 경우 이 특성은 다른 요소 없이 약어의 확장만 포함해야 합니다.","ruby 요소에서는 Ruby 주석으로 표시할 관용구 콘텐츠의 범위를 하나 이상 허용합니다. Ruby 주석은 기본 텍스트, 동아시아 입력 체계에서 주로 발음 안내로 사용되거나 다른 주석을 포함하기 위해 기본 텍스트 옆에 표시되는 짧은 텍스트입니다. 일본어에서는 이러한 형태의 입력 체계를 후리가나라고 합니다. Ruby 텍스트는 기본 텍스트의 한 쪽에 표시될 수 있으며 양쪽 모두에 표시되는 경우도 있습니다. 또한 CSS를 사용하여 위치를 제어할 수 있습니다. 더 많은 ruby 도입 사례를 Ruby 태그에 대한 사용 사례 및 예비 접근 방식 문서 및 CSS Ruby Module Level 1에서 확인할 수 있습니다. [RUBY-UC] [CSSRUBY]","rb 요소는 Ruby 주석의 기본 텍스트 구성 요소를 표시합니다. ruby 요소의 자식인 경우 그 자체로 어떤 것도 나타내지 않지만 해당 상위 ruby 요소는 이 요소를 사용하여 요소에서 나타낼 항목을 결정합니다.","rt 요소는 Ruby 주석의 Ruby 텍스트 구성 요소를 표시합니다. ruby 요소의 자식이거나 ruby 요소의 자체 자식인 rtc 요소의 자식인 경우 그 자체로 어떤 것도 나타내지 않지만 해당 상위 ruby 요소는 이 요소를 사용하여 요소에서 나타낼 항목을 결정합니다.","rp 요소는 Ruby 주석을 지원하지 않는 사용자 에이전트에서 표시할 대체 텍스트를 제공하는 데 사용됩니다. 광범위한 한 가지 규칙은 Ruby 주석의 Ruby 텍스트 구성 요소 주위에 괄호를 입력하는 것입니다.","time 요소는 시스템에서 읽을 수 있는 형식의 콘텐츠와 함께 관련 콘텐츠를 datetime 특성으로 나타냅니다. 아래 설명된 것과 같이 이러한 콘텐츠는 다양한 종류의 일자, 시간, 표준 시간대 오프셋 및 기간으로 제한됩니다.","code 요소는 컴퓨터 코드 조각을 나타냅니다. 이 요소는 XML 요소 이름, 파일 이름, 컴퓨터 프로그램 또는 컴퓨터에서 인식하는 다른 모든 문자열일 수 있습니다.","var 요소는 변수를 나타냅니다. 이 요소는 수학 표현식 또는 프로그래밍 컨텍스트의 실제 변수, 상수를 나타내는 식별자, 실제 수량을 식별하는 기호, 함수 매개 변수 또는 문서에서 자리 표시자로 사용되는 용어일 수 있습니다.","samp 요소는 프로그램 또는 컴퓨터 시스템의 샘플 출력 또는 인용 출력을 나타냅니다.","kbd 요소는 사용자 입력(일반적으로 키보드 입력이며, 음성 명령 등의 다른 입력을 나타내는 데 사용될 수도 있음)을 나타냅니다.","sub 요소는 하위 스크립트를 나타냅니다.","sup 요소는 위 첨자를 나타냅니다.","i 요소는 대체 음성 또는 무드 상태의 텍스트 범위, 또는 영어 텍스트로 된 분류 지정, 기술 용어, 다른 언어의 관용구, 음역, 생각 또는 배 이름 같이 어느 정도 다른 품질의 텍스트를 나타내는 일반 문서의 오프셋을 나타냅니다.","b 요소는 문서 요약의 키워드, 검토 시 제품 이름, 대화형 텍스트 기반의 소프트웨어에서 작동 가능한 단어 또는 문서 소식 같이 중요성을 더 알리지 않고도 대체 음성이나 무드가 포함되지 않은 상태로 이해하기 쉽게 주의를 끄는 텍스트 범위를 나타냅니다.","u 요소는 중국어 텍스트의 고유 명사처럼 텍스트 레이블을 지정(중국어 고유 명사 표시)하거나 철자가 틀린 텍스트 레이블을 지정하는 것과 같이 명확하지는 않지만 명시적으로 렌더링되는 텍스트가 아닌 주석이 있는 텍스트 범위를 나타냅니다.","mark 요소는 다른 컨텍스트에서의 연관성으로 인해 한 문서에서 참조용으로 표시되거나 강조 표시된 연속적인 텍스트를 나타냅니다. 인용 또는 문서에서 참조되는 다른 텍스트 블록에서 사용되는 경우 원래는 없지만 블록이 처음 작성될 때 원래 작성자가 중요하지 않게 여겼던 텍스트 부분으로 독자의 관심을 유도하기 위해 추가된 강조 표시를 나타냅니다. 하지만 현재 이 요소는 이전의 예상과 달리 철저한 조사를 거치고 있습니다. 문서의 주요 내용에서 사용되는 경우 사용자의 현재 활동과 관련이 있을 것 같아 강조 표시된 문서의 일부를 나타냅니다.","bdi 요소는 양방향 텍스트 서식 지정을 위해 주변 항목에서 격리할 텍스트 범위를 나타냅니다. [BIDI]","bdo 요소는 해당 자식에 대한 명시적인 텍스트 방향 서식 지정을 나타냅니다. 이 요소를 통해 작성자는 방향 재정의를 명시적으로 지정하여 유니코드 양방향 알고리즘을 재정의할 수 있습니다. [BIDI]","span 요소는 자체적으로 아무런 의미가 없지만 전역 특성(예: class, lang 또는 dir)과 함께 사용할 경우 유용할 수 있습니다. 이 요소는 해당 자식을 나타냅니다.","br 요소는 줄 바꿈을 나타냅니다.","wbr 요소는 줄 바꿈 가능성을 나타냅니다.","ins 요소는 문서에 추가된 항목을 나타냅니다.","del 요소는 문서에서 제거된 항목을 나타냅니다.","picture 요소는 포함된 img 요소에 다중 원본을 제공하는 컨테이너로, 이를 통해 작성자는 화면 픽셀 밀도, 뷰포트 크기, 이미지 형식 및 기타 요인을 기반으로 사용할 이미지 리소스를 선언적으로 제어하거나 사용자 에이전트에 힌트를 제공할 수 있습니다. 이 요소는 해당 자식 항목을 나타냅니다.","img 요소는 이미지를 나타냅니다.","iframe 요소는 중첩된 검색 컨텍스트를 나타냅니다.","embed 요소는 외부(일반적으로 HTML이 아님) 응용 프로그램 또는 대화형 콘텐츠에 대한 통합 지점을 제공합니다.","object 요소는 외부 리소스를 나타낼 수 있습니다. 이 경우 플러그 인에서 처리되도록 리소스 유형에 따라 이미지, 중첩된 검색 컨텍스트 또는 외부 리소스로 처리됩니다.","param 요소는 object 요소에서 호출되는 플러그 인의 매개 변수를 정의합니다. 자체적으로는 아무 것도 나타내지 않습니다.","비디오 요소는 비디오 또는 동영상과 오디오 파일을 자막과 함께 재생하는 데 사용됩니다.","오디오 요소는 소리 또는 오디오 스트림을 나타냅니다.","source 요소를 통해 작성자는 media 요소에 대한 여러 대체 미디어 리소스를 지정할 수 있습니다. 자체적으로는 아무 것도 나타내지 않습니다.","track 요소를 통해 작성자는 media 요소에 대한 명시적인 외부 시간 텍스트 트랙을 지정할 수 있습니다. 자체적으로는 아무 것도 나타내지 않습니다.","map 요소는 img 요소 및 area 요소 하위 항목과 함께 이미지 맵을 정의합니다. 이 요소는 해당 자식을 나타냅니다.","영역 요소는 일부 텍스트가 포함된 하이퍼링크와 이미지 맵의 해당 영역을 나타내거나 이미지 맵의 사용되지 않는 영역을 나타냅니다.","table 요소는 테이블 형식에서 차원이 두 개 이상인 데이터를 나타냅니다.","caption 요소는 부모가 있고 이 부모가 table 요소인 경우 해당 부모인 테이블의 제목을 나타냅니다.","colgroup 요소는 부모가 있고 이 부모가 table 요소인 경우 해당 부모인 테이블에 하나 이상의 열 그룹을 나타냅니다.","col 요소가 부모가 있고 자체에 테이블 요소인 부모를 가진 colgroup 요소인 경우 col 요소는 해당 colgroup이 나타내는 열 그룹에 하나 이상의 열을 나타냅니다.","tbody 요소에 부모가 있고 이 부모가 테이블인 경우 tbody 요소는 부모 table 요소에 대한 데이터 본문으로 구성된 행 블록을 나타냅니다.","thead 요소에 부모가 있고 이 부모가 테이블인 경우 thead 요소는 부모 table 요소에 대한 열 레이블(헤더)로 구성된 행 블록을 나타냅니다.","tfoot 요소에 부모가 있고 이 부모가 테이블인 경우 tfoot 요소는 부모 table 요소에 대한 열 요약(바닥글)으로 구성된 행 블록을 나타냅니다.","tr 요소는 테이블에서 셀 행을 나타냅니다.","td 요소는 테이블에서 데이터 셀을 나타냅니다.","th 요소는 테이블에서 머리글 셀을 나타냅니다.","form 요소는 폼과 연관된 요소의 컬렉션을 나타냅니다. 이 중 일부는 처리를 위해 서버에 제출할 수 있는 편집 가능한 값을 나타낼 수 있습니다.","label 요소는 사용자 인터페이스의 캡션을 나타냅니다. 캡션은 특성에 사용하거나 자체 label 요소 내에 폼 컨트롤을 배치하여 label 요소 중 레이블이 지정된 컨트롤로 알려진 특정 폼 컨트롤과 연결할 수 있습니다.","input 요소는 사용자가 데이터를 편집할 수 있도록 일반적으로 폼 컨트롤을 사용하여 입력된 데이터 필드를 나타냅니다.","button 요소는 해당 콘텐츠별로 레이블이 지정된 단추를 나타냅니다.","select 요소는 옵션 집합에서 선택하는 컨트롤을 나타냅니다.","datalist 요소는 다른 컨트롤에 대해 미리 정의된 옵션을 나타내는 옵션 집합 요소를 나타냅니다. 렌더링 시 datalist 요소는 아무 것도 나타내지 않으며 해당 자식과 함께 숨겨야 합니다.","optgroup 요소는 일반 레이블을 사용하는 옵션 그룹 요소를 나타냅니다.","option 요소는 select 요소에서 옵션을 나타내거나 datalist 요소에서 제안 목록의 일부로 나타냅니다.","textarea 요소는 요소의 원시 값에 대한 여러 줄 일반 텍스트 편집 컨트롤을 나타냅니다. 컨트롤의 콘텐츠는 컨트롤의 기본값을 나타냅니다.","output 요소는 응용 프로그램에서 수행되는 계산 또는 사용자 작업 결과를 나타냅니다.","progress 요소는 작업 완료 진행 상황을 나타냅니다. progress가 정할 수 없는 상태이거나 즉, 진행은 되고 있지만 작업을 완료할 때까지 수행할 작업이 얼마나 더 남았는지 명확하지 않거나(예: 작업은 원격 호스트가 응답할 때까지 대기하므로) progress는 0에서 최대값 범위에 해당하는 숫자이며 지금까지 완료된 작업 비율을 제공합니다.","meter 요소는 알려진 범위 또는 비율 값(예: 디스크 사용, 쿼리 결과의 관련성 또는 특정 후보자를 선택하기 위한 투표 모집단의 비율) 내에서의 스칼라 측정을 나타냅니다.","fieldset 요소는 일반 이름으로 선택적으로 그룹화된 폼 컨트롤 집합을 나타냅니다.","legend 요소는 legend 요소의 부모 fieldset 요소(있는 경우)의 나머지 콘텐츠에 대한 캡션을 나타냅니다.","details 요소는 사용자가 추가 정보나 컨트롤을 볼 수 있는 공개 위젯을 나타냅니다.","summary 요소는 summary 요소의 부모 details 요소(있는 경우)의 나머지 콘텐츠에 대한 요약, 캡션 또는 범례를 나타냅니다.","dialog 요소는 사용자가 작업을 수행하기 위해 상호 작용하는 응용 프로그램의 일부를 나타냅니다(예: 대화 상자, 검사기 또는 창).","script 요소를 통해 작성자는 관련 문서에 동적 스크립트 및 데이터 블록을 포함할 수 있습니다. 요소는 사용자에 대한 콘텐츠를 나타내지 않습니다.","noscript 요소는 스크립팅을 사용할 경우 아무 것도 나타내지 않으며 스크립팅을 사용하지 않을 경우 해당 자식을 나타냅니다. 이 요소는 문서를 구문 분석하는 방법에 영향을 미침으로써 스크립팅을 지원하고 스크립팅을 지원하지 않는 사용자 에이전트에게 다른 태그를 표시하는 데 사용됩니다.","template 요소를 사용하여 스크립트로 문서에서 복제하고 삽입할 수 있는 HTML 조각을 선언합니다.","canvas 요소는 해상도 기반의 비트맵 캔버스를 사용하는 스크립트를 제공합니다. 이를 사용하여 그래프, 게임 그래픽, 예술 또는 기타 시각적 이미지를 신속하게 렌더링할 수 있습니다.","스타일이 다르게 지정되었다는 점만 제외하면 확인란은 HTML 확인란 입력과 다르지 않습니다. 확인란은 AngularJS 확인란처럼 동작합니다.","ionContent 지시문은 Ionic의 사용자 지정 스크롤 보기나 브라우저의 기본 오버플로 스크롤을 사용하도록 구성할 수 있는 손쉬운 콘텐츠 영역을 제공합니다.","ionItem의 자식",'일부 콘텐츠 아래에 고정된 바닥글 표시줄을 추가합니다. "bar-subfooter" 클래스를 적용하는 경우 하위 바닥글(한 단계 위)이 될 수도 있습니다.','일부 콘텐츠 위에 고정된 머리글 표시줄을 추가합니다. "bar-subheader" 클래스를 적용하는 경우 하위 머리글(한 단계 아래)이 될 수도 있습니다.',"ionContent나 ionScroll의 자식입니다. ionInfiniteScroll 지시문을 작성하면 사용자가 페이지의 맨 아래나 맨 아래 근처를 볼 때마다 함수를 호출할 수 있습니다.",'ionInput은 텍스트 형식 입력 전용입니다. Ionic은 구성 요소 내의 실제 <input type="text"> HTML 요소를 사용하며 이때 Ionic은 사용자 환경과 대화형 작업을 더욱 효과적으로 처리할 수 있도록 래핑됩니다.',"ionList의 자식입니다.","List는 거의 모든 모바일 앱에서 널리 사용되는 인터페이스 요소로, 기본 텍스트부터 단추, 토글, 아이콘, 미리 보기에 이르기까지 거의 모든 콘텐츠를 포함할 수 있습니다.","Modal은 사용자의 주 보기를 임시로 검토할 수 있는 콘텐츠 창입니다. 대개 항목을 선택하거나 편집하는 데 사용됩니다.","onNavBar의 자식입니다. ionNavBar 안에 뒤로 단추를 생성합니다. 뒤로 단추는 사용자가 현재 탐색 스택에서 뒤로 이동할 수 있을 때 나타납니다.","ionNavView 지시문이 있으면 <ion-nav-bar>도 생성할 수 있습니다. 이는 응용 프로그램 상태가 변하면 업데이트되는 상위 표시줄을 생성합니다.","ionNavView의 자식입니다. ionView 내에서 ionNavBar에 단추를 설정하려면 ionNavButtons를 사용하세요.","ionNavView의 자식입니다. ionNavTitle 지시문은 ionView 템플릿 내에서 ionNavBar 제목 텍스트를 사용자 지정 HTML로 바꿉니다.","ionNavVie 지시문은 응용 프로그램에서 템플릿을 렌더링하는 데 사용됩니다. 각 템플릿은 상태의 일부입니다. 대개 상태는 url에 매핑되고 angular-ui-router를 통해 프로그래밍 방식으로 정의됩니다.","ionItem의 자식입니다. 목록 항목 내에서 옵션 단추를 생성합니다. 이 단추는 사용자가 항목을 왼쪽으로 살짝 밀면 보입니다.",'콘텐츠에 맞는 간단한 컨테이너로, 부작용이 없습니다. "pane" 클래스를 요소에 추가합니다.',"Popover는 앱의 콘텐츠 위에서 부동하는 보기입니다. Popover를 사용하면 사용자 정보를 제공하거나 모으기가 쉽습니다.","스타일이 다르게 지정되었다는 점만 제외하면 라디오 ionRirective는 HTML 라디오 입력과 다르지 않습니다. ionRadio는 AngularJS 라디오 입력처럼 동작합니다.","ionContent 또는 ionScroll의 자식입니다. pull-to-refresh를 scrollView에 추가할 수 있도록 허용합니다. ionContent나 ionScroll 요소의 첫 번째 자식으로 배치하세요.","ionItem의 자식입니다.","내부의 모든 콘텐츠에 사용할 수 있는 스크롤 가능한 컨테이너를 생성합니다.","ionSideMenus의 자식입니다. 측면 메뉴의 컨테이너이자 ionSideMenuContent 지시문의 형제입니다.","ionSideMenus의 자식입니다. 표시되는 주 콘텐츠의 컨테이너이자 하나 이상의 ionSideMenu 지시문의 형제입니다.","측면 메뉴와 주 콘텐츠의 컨테이너 요소입니다. 주 콘텐츠 영역을 좌우로 끌어 왼쪽 및/또는 오른쪽 메뉴를 전환할 수 있도록 허용합니다.","ionSlideBox의 자식입니다. 슬라이드 상자 내부에 있는 슬라이드를 표시합니다.","Slide Box는 다중 페이지 컨테이너로, 여기에서 각 페이지를 살짝 밀거나 페이지 간에 끌 수 있습니다.","ionSpinner 지시문은 다양한 애니메이션 회전자를 제공합니다.","ionTabs의 자식입니다. 탭의 콘텐츠가 들어 있습니다. 콘텐츠는 지정된 탭이 선택되어 있는 동안에만 존재합니다.",'탭 표시줄이나 탭할 수 있는 "페이지" 집합이 있는 다중 탭 인터페이스를 구동하게 합니다.',"ion-title은 ionNavbar 제목을 설정하는 구성 요소입니다.","토글은 지정한 모델을 부울에 바인딩하는 애니메이션 스위치입니다. 스위치의 손잡이를 끌 수 있도록 허용합니다. 그렇지 않은 경우 토글은 AngularJS 확인란처럼 동작합니다.","ionNavView의 자식입니다. 콘텐츠와 탐색/머리글 표시줄 정보를 볼 수 있는 컨테이너입니다."]});
//# sourceMappingURL=../../../../../min-maps/vs/languages/html/common/htmlWorker.nls.ko.js.map