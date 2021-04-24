import React, { useCallback, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { CardBody, Button, Text, Flex, LinkExternal, CopyToClipboard } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import UnlockButton from 'components/UnlockButton'
import useI18n from 'hooks/useI18n'
import useReferral from 'hooks/useReferral'
import { useReferrals } from 'state/hooks'
import InputPanel from './InputPanel'
import { BottomGrouping, Wrapper, AppWrapper, BodyWrapper } from './Styleds'
import PageHeader from './PageHeader'
import AppBody from './AppBody'

const Referral: React.FC = () => {
    const { account } = useWallet()

    const TranslateString = useI18n()
    const [val, setVal] = useState('')

    const { onReferral } = useReferral(val)
    const isRegister = useReferrals(account)
    console.log(isRegister)
    const [pendingTx, setPendingTx] = useState(false)
    const [error, setError] = useState(true)
    const handleChange = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            setVal(e.currentTarget.value)
            try {
                const rawValue = e.currentTarget.value
                if (rawValue !== '') {
                    setError(false)
                } else {
                    setError(true)
                }
            } catch {
                setError(true)
            }
        },
        [setVal],
    )

    return (
        <Page>
            <AppWrapper>
                <BodyWrapper>
                    <AppBody>
                        <Wrapper id="refer-page">
                            <PageHeader title="Referral" description="Trade tokens in an instant" />
                            <CardBody>
                                {account ? (
                                    <>
                                        {!isRegister.isRegister ? (
                                            <InputPanel
                                                value={val}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            <div>
                                                <Text fontSize="16px"
                                                    bold
                                                    style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
                                                >
                                                    Referral Address : {isRegister.partnerAddress}
                                                </Text>
                                                <Text fontSize="17px"
                                                    bold
                                                    style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
                                                >
                                                    Child Count : {isRegister.totalChildPartner}
                                                </Text>
                                                {isRegister.isRegister ? (
                                                    <Flex mb="32px">
                                                        <LinkExternal small href={`https://bscscan.com/address/${isRegister.partnerAddress}`} mr="16px">
                                                            View on BscScan
                                                    </LinkExternal>
                                                        <CopyToClipboard toCopy={isRegister.partnerAddress}>Copy Address</CopyToClipboard>
                                                    </Flex>
                                                ) : ''
                                                }
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    ''
                                )}
                                {!isRegister.isRegister?(
                                    <BottomGrouping>
                                        {!account ? (
                                            <UnlockButton fullWidth />
                                        ) : (
                                            <Button
                                                fullWidth
                                                disabled={error}
                                                onClick={async () => {
                                                    try {
                                                        setError(true)
                                                        setPendingTx(true)
                                                        await onReferral()
                                                        setError(false)
                                                        setPendingTx(false)
                                                    } catch (e) {
                                                        console.error(e)
                                                    }
                                                }}>
                                                {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
                                            </Button>
                                        )}
                                    </BottomGrouping>
                                    ) : (
                                        ''
                                    )
                                }
                            </CardBody>
                        </Wrapper>
                    </AppBody>
                </BodyWrapper>
            </AppWrapper>
        </Page >
    )
}

export default Referral