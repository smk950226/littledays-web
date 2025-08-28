import Screen from '../../../../common/component/layout/screen/screen';
import Body2 from '../../../../common/component/layout/typography/body2';
import Headline1 from '../../../../common/component/layout/typography/headline1';
import Subtitle1 from '../../../../common/component/layout/typography/subtitle1';
import Gap from '../../component/gap';
import Indent from '../../component/indent';

export default function PolicyService() {
    return (
        <Screen>
            <Headline1 textAlign={'center'}>
                Little Days 서비스 이용약관
            </Headline1>
            <Gap.Lg />
            <Subtitle1>제 1조 (목적)</Subtitle1>
            <Gap.Sm />
            <Body2>
                본 약관은 주식회사 써스데이플래닛(이하 “회사”)가 제공하는 가족
                앨범 공유 서비스 “Little Days”(이하 “서비스”)의 이용과 관련하여
                회사와 회원 간의 권리, 의무 및 책임 사항을 규정함을 목적으로
                합니다.
            </Body2>
            <Gap.Lg />
            <Subtitle1>제 2조 (용어의 정의)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                “서비스”란 회사가 운영하는 앱을 통해 제공하는 가족 사진·영상
                공유, 댓글 및 반응, 앨범 관리 등 일체의 기능을 말합니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                “회원”이라 함은 본 약관에 동의하고 회사와 이용계약을 체결하여
                서비스를 이용하는 자를 말합니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'3.'}>
                “가족 앨범”이라 함은 회원이 생성하여 초대한 가족 구성원과 함께
                사진·영상 및 기록을 공유하는 공간을 말합니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'4.'}>
                “콘텐츠”라 함은 회원이 서비스를 이용하여 업로드하거나 작성하는
                사진, 영상, 글, 댓글 등 모든 자료를 말합니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 3조 (약관의 효력 및 변경)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                본 약관은 회원이 서비스 이용 신청 시 동의함으로써 효력이
                발생합니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수
                있습니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'3.'}>
                약관이 변경되는 경우 회사는 개정 내용을 서비스 내 공지 또는 기타
                합리적인 방법으로 회원에게 고지합니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'4.'}>
                회원이 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고
                이용계약을 해지할 수 있습니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 4조 (이용계약 체결)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                서비스 이용계약은 회원이 약관에 동의하고 회사가 정한 절차에 따라
                가입을 완료한 때 성립합니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                회원은 반드시 본인의 정확한 정보를 제공해야 하며, 허위 정보
                제공으로 발생하는 불이익은 회원 본인에게 책임이 있습니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 5조 (서비스의 이용)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                서비스는 가족 간의 추억 기록 및 공유를 목적으로 제공됩니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                회원은 생성된 가족 앨범에 사진·영상 업로드, 댓글 작성, 반응 기능
                등을 이용할 수 있습니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'3.'}>
                회사는 무료로 서비스를 제공하되, 광고나 프로모션을 서비스 내에
                게재할 수 있습니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 6조 (서비스의 변경 및 중단)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                회사는 서비스의 품질 향상 및 운영상 필요에 따라 서비스의 전부
                또는 일부를 변경할 수 있습니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                불가피한 사유로 서비스 제공이 중단될 경우 회사는 사전 공지를
                원칙으로 합니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 7조 (회원의 의무)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                회원은 서비스 이용 시 다음 행위를 하여서는 안 됩니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                타인의 개인정보 도용
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                부적절한 콘텐츠 업로드
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                서비스 운영을 방해하는 행위
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                회원이 위 의무를 위반할 경우 회사는 서비스 이용을 제한하거나
                이용계약을 해지할 수 있습니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 8조 (회사의 의무)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                회사는 관련 법령과 본 약관에 따라 안정적으로 서비스를 제공하기
                위해 최선을 다합니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                회사는 개인정보 보호정책에 따라 회원의 개인정보를 안전하게
                관리합니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 9조 (콘텐츠 관리)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                회원이 서비스에 업로드한 콘텐츠의 저작권은 해당 회원에게
                귀속됩니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                회사는 서비스 운영, 개선 및 홍보를 위하여 회원의 동의 하에
                콘텐츠를 활용할 수 있습니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'3.'}>
                회원이 올린 콘텐츠가 법령을 위반하거나 타인의 권리를 침해하는
                경우 회사는 사전 통보 없이 삭제할 수 있습니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 10조 (계약 해지 및 이용 제한)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                회원은 언제든 서비스 내 설정 메뉴를 통해 이용계약을 해지할 수
                있습니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                회사는 회원이 본 약관을 위반하거나 법령을 위반하는 경우 사전
                통보 후 서비스 이용을 제한하거나 계약을 해지할 수 있습니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 11조 (손해배상 및 면책)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                회사는 서비스 이용과 관련하여 회원에게 발생한 손해에 대해 회사의
                고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                회원이 본 약관을 위반하여 회사에 손해가 발생한 경우 회원은 그
                손해를 배상해야 합니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 12조 (분쟁 해결 및 관할법원)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                회사와 회원 간 발생한 분쟁에 대해서는 상호 협의하여 원만하게
                해결함을 원칙으로 합니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                협의로 해결되지 않는 경우, 소송은 회사 본사 소재지 관할 법원에
                제기합니다.
            </Indent>
            <Gap.Lg />
            <Body2>본 약관은 2025년 8월 28일부터 적용됩니다.</Body2>
        </Screen>
    );
}
