import Screen from '@/common/component/layout/screen/screen';
import Headline1 from '@/common/component/layout/typography/headline1';
import Gap from '../../component/gap';
import Body2 from '@/common/component/layout/typography/body2';
import Subtitle1 from '@/common/component/layout/typography/subtitle1';
import Indent from '../../component/indent';

export default function PolicyCSAE() {
    return (
        <Screen>
            <Headline1 textAlign={'center'}>
                Little Days 아동 안전 표준 정책
            </Headline1>
            <Gap.Lg />
            <Body2>
                주식회사 써스데이플래닛(이하 “회사”)은 가족 앨범 공유 서비스
                “Little Days”(이하 “서비스”)를 운영함에 있어 아동 성적 학대 및
                착취(Child Sexual Abuse and Exploitation, 이하 “CSAE”)에 대해
                무관용 원칙(Zero Tolerance Policy)을 적용합니다.
            </Body2>
            <Gap.Sm />
            <Body2>
                모든 이용자는 본 서비스를 이용함에 있어 아래와 같은 원칙과
                기준을 반드시 준수해야 합니다.
            </Body2>
            <Gap.Lg />
            <Subtitle1>1. 금지되는 콘텐츠</Subtitle1>
            <Gap.Sm />
            <Body2>
                다음과 같은 모든 형태의 콘텐츠는 업로드, 공유, 저장이
                금지됩니다.
            </Body2>
            <Gap.Sm />
            <Indent prefix={'○'}>
                아동을 성적 맥락에서 묘사, 표현, 조장하는 이미지, 영상, 텍스트
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'}>
                아동의 나체 또는 신체 일부를 성적 착취의 목적으로 제작·편집한
                콘텐츠
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'}>
                아동에게 성적 행위를 요구, 유도, 위협하는 대화나 메시지
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'}>
                아동 성적 학대 및 착취를 미화하거나 정상화하는 모든 행위
            </Indent>
            <Gap.Lg />
            <Subtitle1>2. 모니터링 및 대응</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'○'}>
                신고된 콘텐츠는 24시간 이내에 검토됩니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'}>
                CSAE에 해당하는 것으로 판단되는 경우, 해당 콘텐츠는 즉시
                삭제되며 계정은 영구 정지됩니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'}>
                심각한 위법 행위는 관련 수사기관 및 국제 아동보호 단체(NCMEC
                등)에 즉시 보고합니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>3. 이용자 신고 절차</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'○'}>
                모든 회원은 서비스 내 신고 기능을 통해 의심되는 CSAE 콘텐츠를
                즉시 신고할 수 있습니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'}>
                신고는 익명으로 처리되며, 조치 결과는 가능한 범위 내에서
                신고자에게 안내됩니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>4. 국제 및 국내 기준 준수</Subtitle1>
            <Gap.Sm />
            <Body2>본 서비스는 다음과 같은 기준을 준수합니다.</Body2>
            <Gap.Sm />
            <Indent prefix={'○'}>UN 아동권리협약 (UNCRC)</Indent>
            <Gap.Sm />
            <Indent prefix={'○'}>
                대한민국 「아동·청소년의 성보호에 관한 법률」
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'}>
                국제적 아동 온라인 안전 권고안 (NCMEC, WePROTECT 등)
            </Indent>
            <Gap.Lg />
            <Body2>
                본 아동 안전 표준 정책은 2025년 8월 28일부터 시행됩니다.
            </Body2>
            <Gap.Sm />
            <Body2>
                회사는 법령, 국제 규범, 서비스 운영 정책의 변경에 따라 본 정책을
                개정할 수 있으며, 변경 사항은 서비스 내 공지사항을 통해 사전에
                안내합니다.
            </Body2>
            <Gap.Lg />
            <Body2>
                본 청책과 관련한 문의, 신고, 또는 추가 안내가 필요하신 경우
                아래로 연락주시기 바랍니다.
            </Body2>
            <Gap.Sm />
            <Body2>주식회사 써스데이플래닛</Body2>
            <Gap.Sm />
            <Indent prefix={'○'}>이메일 : hi@thuplanet.com</Indent>
            <Gap.Sm />
            <Indent prefix={'○'}>주소 : 서울 강남구 삼성로85길 30, 10층</Indent>
        </Screen>
    );
}
