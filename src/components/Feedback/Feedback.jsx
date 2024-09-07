import React from 'react'
import mainStyles from '../Main/Main.module.scss'
import styles from './Feedback.module.scss'
import { Checkbox, ConfigProvider, Select, Input, Switch, message } from 'antd'
import { useFormik } from 'formik'
import { sendData } from '../api/api'

export const Feedback = () => {
    const [tab, setTab] = React.useState('finishing')
  return (
    <ConfigProvider
    theme={{
        components: {
            Input:{
                colorBgContainer: '#F8A219',
                colorBorder: '#00000000',
                colorText: '#001736',
                fontFamily: 'Montserrat',
                paddingBlock: '15px 20px',
                colorTextPlaceholder: '#001736',
                fontSize: '18px',
                borderRadius: '15px',
                '@media (max-width: 768px)': {
                    fontSize: '16px',
                    paddingBlock: '12px 18px',
                },
                '@media (max-width: 392px)': {
                    fontSize: '14px',
                    paddingBlock: '10px 16px',
                },
                '@media (max-width: 360px)': {
                    fontSize: '12px',
                    paddingBlock: '8px 14px',
                },
                '@media (max-width: 342px)': {
                    fontSize: '10px',
                    paddingBlock: '6px 12px',
                }
            },
            Select:{
                colorBgContainer: '#F8A219',
                colorBorder: '#00000000',
                colorTextPlaceholder: '#001736',
                colorText: '#001736',
                fontFamily: 'Montserrat',
                selectorBg: '#F8A219',
                optionPadding: '15px 20px',
                fontSize: '18px',
                borderRadius: '15px',
                '@media (max-width: 768px)': {
                    fontSize: '16px',
                    optionPadding: '12px 18px',
                },
                '@media (max-width: 392px)': {
                    fontSize: '14px',
                    optionPadding: '10px 16px',
                },
                '@media (max-width: 360px)': {
                    fontSize: '12px',
                    optionPadding: '8px 14px',
                },
                '@media (max-width: 342px)': {
                    fontSize: '10px',
                    optionPadding: '6px 12px',
                }
            },
            Switch:{
                handleBg: '#ffffff',
                colorBgContainer: '#fff',
                '@media (max-width: 768px)': {
                    handleSize: '20px',
                },
                '@media (max-width: 392px)': {
                    handleSize: '18px',
                },
                '@media (max-width: 360px)': {
                    handleSize: '16px',
                },
                '@media (max-width: 342px)': {
                    handleSize: '14px',
                }
            },
            Checkbox:{
                colorBgContainer: '#F8A219',
                colorBorder: '#00000000',
                colorWhite: '#001736',
                fontFamily: 'Montserrat',
                paddingBlock: '15px 20px',
                fontSize: '18px',
                borderRadius: '15px',
                lineWidth: '10px',
                '@media (max-width: 768px)': {
                    fontSize: '16px',
                    paddingBlock: '12px 18px',
                },
                '@media (max-width: 392px)': {
                    fontSize: '14px',
                    paddingBlock: '10px 16px',
                },
                '@media (max-width: 360px)': {
                    fontSize: '12px',
                    paddingBlock: '8px 14px',
                },
                '@media (max-width: 342px)': {
                    fontSize: '10px',
                    paddingBlock: '6px 12px',
                }
            }
        },
        token: {
            colorPrimary: '#F8A219',
            colorText: '#fff'
        }
    }}
    button={{
        className: 'defaultButton'
    }}
>

        <div className={styles.feedbackContainer} id='feedback'>
            <h1 className={mainStyles.blockTitle}>
                Обратная связь
            </h1>
            <div className={styles.feedbackForms}>
                <div className={styles.feedbackFormsTabs}>
                    <h3>
                        Оставить заявку
                    </h3>
                    <div className={styles.feedbackTabs}>
                        <button className={tab === 'furniture' ? styles.active : ''} onClick={() => setTab('furniture')}>Мебель</button>
                        <button className={tab === 'finishing' ? styles.active : ''} onClick={() => setTab('finishing')}>Отделка</button>
                    </div>
                </div>
                <div className={styles.feedbackFormsForm}>
                    {
                        tab === 'furniture' ?
                        <FormFurniture />
                        :
                        <FormFinishing />
                    }
                </div>
            </div>
        </div>
    </ConfigProvider>
  )
}

const FormFurniture = () => {
    const materials = [
        {
            value: 'Дерево',
            name: 'Дерево'
        },
        {
            value: 'ЛДСП',
            name: 'ЛДСП'
        }
    ]
    const formikFurniture = useFormik({
        initialValues: {
            material: 'нет',
            name: '',
            phone: '+375'
        },
        onSubmit: values => {
            sendData.send_feedback({ type: 'Мебель', data: values })
            message.success('Заявка успешно создана!')
        }
    })

    return (
        <form onSubmit={formikFurniture.handleSubmit} className={styles.firstForm}>
            <Select
                placeholder="Материал"
                style={{ height: '55px' }}
                onSelect={(value) => {
                    formikFurniture.setFieldValue('material', value)
                }}
            >
                {materials.map(el => (
                    <Select.Option key={el.value} value={el.value}>{el.name}</Select.Option>
                ))}
            </Select>
            <Input
                placeholder='Имя'
                {...formikFurniture.getFieldProps('name')}
            />
            <Input
                style={{ width: '100%' }}
                type='tel'
                minLength={11}
                maxLength={13}
                placeholder='+375(xx)xxx-xx-xx'
                {...formikFurniture.getFieldProps('phone')}
            />
            <button className={styles.buttonSubmit} type='submit'>Отправить данные</button>
        </form>
    )
}

const FormFinishing = () => {
    const floorOptions = [
        {
            value: 'Дерево',
            name: 'Дерево'
        },
        {
            value: 'Ламинат',
            name: 'Ламинат'
        },
        {
            value: 'Линолеум',
            name: 'Линолеум'
        }
    ]
    const wallsOptions = [
        {
            value: 'Дерево',
            name: 'Дерево'
        },
        {
            value: 'Ламинат',
            name: 'Ламинат'
        },
        {
            value: 'ПВХ',
            name: 'ПВХ'
        }
    ]
    const ceilingOptions = [
        {
            value: 'Дерево',
            name: 'Дерево'
        },
        {
            value: 'Ламинат',
            name: 'Ламинат'
        },
        {
            value: 'ПВХ',
            name: 'ПВХ'
        },
        {
            value: 'Натяжной',
            name: 'Натяжной'
        }
    ]
    const floorInsulationOptions = [
        {
            value: 'Нет',
            name: 'Нет'
        },
        {
            value: 'Пенополистирол',
            name: 'Пенополистирол'
        },
        {
            value: 'Электрический тёплый пол',
            name: 'Электрический тёплый пол'
        }
    ]

    const formikFinishing = useFormik({
        initialValues: {
            floorMaterial: 'нет',
            wallsMaterial: 'нет',
            ceilingMaterial: 'нет',
            floorInsulation: 'нет',
            width: '0',
            length: '0',
            height: '0',
            dismantling: false,
            glazing: false,
            wallsInsulation: false,
            electricity: false,
            exteriorCladding: false,
            balkonyFurniture: false,
            name: '',
            phone: '+375'
        },
        onSubmit: values => {
            sendData.send_feedback({ type: 'Отделка', data: values })
            message.success('Заявка успешно создана!')
        }
    })

    return (
        <form onSubmit={() => formikFinishing.handleSubmit()} className={styles.formFinishing} id='feedback'>
            <div className={styles.contextBox}>
                <label className={styles.blockName}>Параметры балкона</label>
                <div className={styles.contentBoxBlock}>
                    <Select placeholder="Материал пола" onSelect={(e) => formikFinishing.setFieldValue('floorMaterial', e)} style={{ height: '55px' }}>
                        {
                            floorOptions.map(el => {
                                return <Select.Option key={el.value} value={el.value}>{el.name}</Select.Option>
                            })
                        }
                    </Select>
                    <Select placeholder="Материал стен"  onSelect={(e) => formikFinishing.setFieldValue('wallsMaterial', e)} style={{ height: '55px' }}>
                        {
                            wallsOptions.map(el => {
                                return <Select.Option key={el.value} value={el.value}>{el.name}</Select.Option>
                            })
                        }
                    </Select>
                    <Select placeholder="Материал потолка"  onSelect={(e) => formikFinishing.setFieldValue('ceilingMaterial', e)} style={{ height: '55px' }}>
                        {
                            ceilingOptions.map(el => {
                                return <Select.Option key={el.value} value={el.value}>{el.name}</Select.Option>
                            })
                        }
                    </Select>
                    <Select placeholder="Утепление пола"  onSelect={(e) => formikFinishing.setFieldValue('floorInsulation', e)} style={{ height: '55px' }}>
                        {
                            floorInsulationOptions.map(el => {
                                return <Select.Option key={el.value} value={el.value}>{el.name}</Select.Option>
                            })
                        }
                    </Select>
                </div>
                <div className={styles.contentBoxBlock}>
                    <h4> Ширина <Input placeholder='0 см' type='number' maxLength={5} onChange={(e) => formikFinishing.setFieldValue('width', e.target.value)} style={{ width: '250px' }} /> Длина <Input placeholder='0 см' type='number'  maxLength={5} onChange={(e) => formikFinishing.setFieldValue('length', e.target.value)} style={{ width: '250px' }} /> Высота <Input placeholder='0 см' type='number'  maxLength={5} onChange={(e) => formikFinishing.setFieldValue('height', e.target.value)} style={{ width: '250px' }} /> </h4>
                    <span className={styles.blockSwitch}>
                        <Switch
                            checked={formikFinishing.values.dismantling}
                            onChange={() => {
                                formikFinishing.setFieldValue('dismantling', !formikFinishing.values.dismantling);
                            }}
                            style={{ width: '60px', height: '25px', borderRadius: '200px' }}
                        />
                        <h4>Демонтаж старой отделки</h4>
                    </span>
                    <span className={styles.blockSwitch}>
                        <Switch
                            checked={formikFinishing.values.glazing}
                            onChange={() => {
                                formikFinishing.setFieldValue('glazing', !formikFinishing.values.glazing);
                            }}
                            style={{ width: '60px', height: '25px', borderRadius: '200px' }}
                        />
                        <h4>Требуется ли остекление балкона</h4>
                    </span>
                    <span className={styles.blockCheckboxes}>
                        <Checkbox style={{ display: 'flex', alignItems: 'center' }} onChange={(e) => {formikFinishing.setFieldValue('wallsInsulation', e.target.checked)}}>Утепление стен</Checkbox> 
                        <Checkbox style={{ display: 'flex', alignItems: 'center' }} onChange={(e) => {formikFinishing.setFieldValue('electricity', e.target.checked)}}>Подводка электрики</Checkbox> 
                    </span>
                    <span className={styles.blockCheckboxes}>
                        <Checkbox style={{ display: 'flex', alignItems: 'center' }} onChange={(e) => {formikFinishing.setFieldValue('exteriorCladding', e.target.checked)}}>Внешняя обшивка</Checkbox> 
                        <Checkbox style={{ display: 'flex', alignItems: 'center' }} onChange={(e) => {formikFinishing.setFieldValue('balkonyFurniture', e.target.checked)}}>Балконная мебель</Checkbox> 
                    </span>
                </div>
            </div>
            <div className={`${styles.contextBox} ${styles.contextBoxContacts}`}>
                <label className={styles.blockName}>Контакты</label>
                <Input placeholder='Имя' defaultValue={''} {...formikFinishing.getFieldProps('name')}/>
                <Input
                    style={{ width: '100%' }}
                    type='tel'
                    minLength={11}
                    maxLength={13}
                    placeholder='+375(xx)xxx-xx-xx'
                    {...formikFinishing.getFieldProps('phone')}
                />
            </div>
            <div className={styles.contextBoxContacts}>
                <h2>
                    Мы свяжемся с вами
                    в ближайшее время!
                </h2>
                <button className={styles.buttonSubmit} type='submit'>Отправить данные</button>
            </div>
        </form>
    )
}
