import Screen from '@/common/component/layout/screen/screen';
import Body2 from '@/common/component/layout/typography/body2';
import Headline1 from '@/common/component/layout/typography/headline1';
import Subtitle1 from '@/common/component/layout/typography/subtitle1';
import Gap from '../../component/gap';
import Indent from '../../component/indent';

export default function PolicyPrivacy() {
    return (
        <Screen>
            <Headline1
                sx={{
                    textAlign: 'center',
                }}
            >
                Little Days 개인정보 처리방침
            </Headline1>
            <Gap.Lg />
            <Body2>
                주식회사 써스데이플래닛(이하 “회사”)는 가족 앨범 공유 서비스
                “Little Days”(이하 “서비 스”)를 운영함에 있어 「정보통신망
                이용촉진 및 정보보호 등에 관한 법률」, 「개인정보보 호법」 등
                관련 법령을 준수하고, 이용자의 개인정보를 소중하게 보호하기 위해
                최선을 다하고 있습니다.
            </Body2>
            <Gap.Sm />
            <Body2>
                본 개인정보 처리방침은 “회사”가 “회원”의 개인정보를 어떠한
                목적으로, 어떻게 수집·이용하며, 개인정보 보호를 위해 어떠한
                조치를 취하는지 명확히 알려드리기 위한 것입니다.
            </Body2>
            <Gap.Sm />
            <Body2>
                “회사”는 본 개인정보 처리방침을 서비스 내에 공개하여 언제든지
                쉽게 확인할 수 있도록 하며, 관련 법령 및 내부 운영 정책의 변경에
                따라 개정될 수 있습니다.
            </Body2>
            <Gap.Lg />
            <Subtitle1>제 1조 (개인정보의 수집 및 이용 목적)</Subtitle1>
            <Gap.Sm />
            <Body2>
                “회사”는 다음의 목적을 위해 최소한의 개인정보를 수집·이용하며,
                다른 목적으로 이용하지 않습니다.
            </Body2>
            <Gap.Sm />
            <Indent prefix={'1.'}>서비스 제공 및 운영</Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                회원가입, 본인 확인, 가족 초대 및 그룹 생성
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                사진·영상 업로드 및 열람, 댓글·반응 기능 제공
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                서비스 내 커뮤니케이션 및 콘텐츠 저장
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>회원 관리</Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                회원 식별 및 본인 확인
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                서비스 부정 이용 방지 및 제재
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                가입 및 탈퇴 의사 확인
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                공지사항 전달 및 민원 처리
            </Indent>
            <Gap.Sm />
            <Indent prefix={'3.'}>서비스 개선 및 마케팅 활용</Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                신규 서비스 개발 및 맞춤형 서비스 제공
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                서비스 이용 통계 및 품질 향상
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                광고성 정보 제공 (법령상 허용된 범위 내에서만 진행)
            </Indent>

            <Gap.Lg />
            <Subtitle1>제 2조 (수집하는 개인정보 항목 및 수집 방법)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>회원가입 시 수집 항목</Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                필수: 휴대전화 번호, 닉네임, 아기 사진, 아기 이름, 아기 성별,
                아기 생년월일, 아기와의 관계
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                선택: 프로필 사진
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>서비스 이용 시 수집 항목</Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                서비스 이용 기록: 접속 로그, 접속 IP 주소, 이용 시간, 업로드
                콘텐츠 기록
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                기기 정보: 기기 종류, OS 버전, 앱 버전, 기기 식별자
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                광고 관련 정보: 광고 식별자(ADID, IDFA 등)
            </Indent>
            <Gap.Sm />
            <Indent prefix={'3.'}>개인정보 수집 방법</Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                회원가입 및 서비스 이용 과정에서 직접 입력
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                서비스 이용 중 자동 생성·수집 (로그 데이터, 기기 정보)
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                제휴 서비스(예: 소셜 로그인) 이용 시 필요한 범위 내에서 수집
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 3조 (개인정보의 보유 및 이용 기간)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                회원 정보는 회원 탈퇴 시 또는 개인정보 수집·이용 목적 달성 시
                즉시 파기합니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                단, 관련 법령에 따라 일정 기간 보존할 필요가 있는 경우는 해당
                법령이 정한 기간 동안 보관합니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                소비자의 불만 또는 분쟁 처리에 관한 기록: 3년 (전자상거래법)
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                접속 로그 기록: 3개월 (통신비밀보호법)
            </Indent>
            <Gap.Lg />

            <Subtitle1>제 4조 (개인정보의 제3자 제공)</Subtitle1>
            <Gap.Sm />
            <Body2>
                “회사”는 원칙적으로 “회원”의 개인정보를 사전 동의 없이 외부에
                제공하지 않습니다. 다만, 다음의 경우는 예외로 합니다.
            </Body2>
            <Gap.Sm />
            <Indent prefix={'1.'}>회원이 사전에 동의한 경우</Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                법령의 규정에 따라 수사기관의 요구가 있는 경우
            </Indent>
            <Gap.Sm />
            <Indent prefix={'3.'}>
                특정 개인을 식별할 수 없는 형태로 통계·분석 자료를 제공하는 경우
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 5조 (개인정보 파기 절차 및 방법)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>파기 절차</Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                개인정보는 목적 달성 후 별도 DB로 분리 저장되었다가 법령에 따라
                보관 기간이 경과하면 지체 없이 파기됩니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>파기 방법</Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                전자적 파일: 복구할 수 없는 기술적 방법으로 삭제
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                종이 문서: 분쇄하거나 소각하여 파기
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 6조 (이용자의 권리와 행사 방법)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                회원은 언제든지 자신의 개인정보를 열람·정정·삭제할 수 있습니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                정보 수정: "서비스" 내 "더보기" &gt; "정보 수정" 기능을 통해
                수정.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                회원은 서비스 내 “계정 관리” 메뉴를 통해 회원 탈퇴 및 동의
                철회를 할 수 있습니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                동의 철회/회원 탈퇴: "서비스" 내 "더보기" &gt; "계정 & 보안"
                &gt; "탈퇴하기" 기능을 통해 신청.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'3.'}>
                권리 행사는 서면, 이메일, 전화 등을 통해서도 가능하며, 회사는
                지체 없이 조치합니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 7조 (개인정보의 안전성 확보 조치)</Subtitle1>
            <Gap.Sm />
            <Body2>
                “회사”는 개인정보 보호를 위해 다음과 같은 조치를 취합니다.
            </Body2>
            <Gap.Sm />
            <Indent prefix={'1.'}>기술적 조치</Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                비밀번호 암호화, 보안 프로그램 설치, 해킹 차단 시스템 운영
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>관리적 조치</Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                개인정보 접근 권한 최소화, 정기적 보안 교육 실시
            </Indent>
            <Gap.Sm />
            <Indent prefix={'3.'}>물리적 조치</Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                서버실 및 자료 보관소 접근 통제
            </Indent>
            <Gap.Lg />
            <Subtitle1>
                제 8조 (개인정보 자동 수집 장치의 설치·운영 및 거부)
            </Subtitle1>
            <Gap.Sm />
            <Indent prefix={'1.'}>
                회사는 맞춤형 광고 제공 등을 위해 광고 식별자 및 쿠키(Cookie)를
                수집할 수 있습니다.
            </Indent>
            <Gap.Sm />
            <Indent prefix={'2.'}>
                회원은 단말기 설정을 통해 쿠키 저장을 거부할 수 있으며, 이 경우
                일부 서비스 이용에 제한이 있을 수 있습니다.
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 9조 (개인정보 보호책임자 및 담당 부서)</Subtitle1>
            <Gap.Sm />
            <Indent prefix={'●'}>개인정보 보호책임자</Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                성명: 정유찬
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                직책: 대표이사
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                연락처: yuchan.jung@thuplanet.com
            </Indent>
            <Gap.Sm />
            <Indent prefix={'●'}>개인정보 보호 담당 부서</Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                부서명: 본사
            </Indent>
            <Gap.Sm />
            <Indent prefix={'○'} depth={2}>
                연락처: hi@thuplanet.com
            </Indent>
            <Gap.Sm />
            <Body2>
                ※ 기타 개인정보 침해에 대한 신고·상담은 아래 기관에 문의할 수
                있습니다.
            </Body2>
            <Gap.Sm />
            <Indent prefix={'●'}>
                개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)
            </Indent>
            <Gap.Sm />
            <Indent prefix={'●'}>
                대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)
            </Indent>
            <Gap.Sm />
            <Indent prefix={'●'}>
                경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이 182)
            </Indent>
            <Gap.Lg />
            <Subtitle1>제 10조 (개인정보 처리방침 변경)</Subtitle1>
            <Gap.Sm />
            <Body2>
                본 개인정보 처리방침은 법령, 지침, 회사 정책의 변경에 따라
                개정될 수 있으며, 개정 시 최소 7일 전 공지합니다.
            </Body2>
            <Body2>
                단, 회원에게 불리한 변경의 경우 최소 30일 전부터 공지합니다.
            </Body2>
            <Gap.Sm />
            <Indent prefix={'●'}>최초 공지일자: 2025년 8월 28일</Indent>
            <Gap.Sm />
            <Indent prefix={'●'}>시행일자: 2025년 8월 28일</Indent>
        </Screen>
    );
}
