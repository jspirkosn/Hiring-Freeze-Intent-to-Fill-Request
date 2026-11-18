import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '27a8cdec5c254c00a4b8e66e4aa40a67'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'b5bdeae9f9944196a036f9d7a426aa2a'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0009db2d8c744f679eac1754e3f9b5d1'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0021ff8e7ba04237bf636aaf5411f53d'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            value: 'screening'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '004445fd9760dbd45c91b63de053af59'
                        key: {
                            id: '98901d72cc7b41f1a71cc83202d39125'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '00464424260f4cd3a621a2c0a17b2cc1'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'duties_absorbed_explanation'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0061615c6b4b4fd883691dbab4469f46'
                        key: {
                            document_key: '220401ea2994417aa81b58c360d16ecb'
                            variable: 'c23322e91bbb001094630f28cc4bcbae'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '006254b197689bd45c91b63de053aff2'
                        key: {
                            model: 'fb5254b197689bd45c91b63de053afcb'
                            element: 'group'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '00b54b800a4d4fba9243135845fedc0d'
                        key: {
                            document_key: 'e6728198f65942229535b889f83873b0'
                            variable: '6f69fc4aff6433008d3f5d9ad53bf18c'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '00c035f81fce4f6d83c8951bc62c4e8b'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_unbudget_position'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '00f7844b9c3f4f14b9d9e05293a6a788'
                        key: {
                            document_key: '220401ea2994417aa81b58c360d16ecb'
                            variable: '661d304673030010fe4a6da44cf6a7b1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01385e34977b40a5b424f918d8c5ef6f'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacated_by_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '015549b197a0dbd45c91b63de053af02'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '016965b59ffd4e928c07daa5ca2f7044'
                        key: {
                            name: 'asmt_metric_type'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '01b94ee06b8c4414948d48bc2eb79d3b'
                        key: {
                            document_key: 'c7d96757741e42359ba3d689bd97f494'
                            variable: 'ec5d96eac7e60010bfbaf89f51c2605d'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '01e81f707d8c4533be5301e34128ace7'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_fund_src_2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '020918a28a6648eaaaa2e843d0d3b69c'
                        key: {
                            id: '0006de7a35ef4ce89a9123f432c40783'
                            table: 'var__m_sys_pd_activity_type_prop_dc6459fbff001010393e53bd6338f1cb'
                            field: 'template_fields'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0255ea1c19d545589323e7bedd3fbfee'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'class_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0282d03597689bd45c91b63de053af54'
                        key: {
                            name: 'var__m_sys_hub_flow_input_8a82d03597689bd45c91b63de053af2a'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0292162930f940a484c381db44d079c8'
                        key: {
                            document_key: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            variable: '9d2ff6a7c3611010381b60bc0eba8f3c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '02b1f4014f704d1792bed45a29ceb68b'
                        key: {
                            document_key: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '02cbba13a9e4434ba493e38ef64fd0cc'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_fund_src_1'
                            value: 'cash'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '02fa2ce22a3e4e4bae33bdfdb8782e40'
                        key: {
                            document_key: 'd9938bb6667c429c8c967e2ce0c9052f'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '03082bc9b005456aba9f0ef265233cc3'
                        key: {
                            id: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_sla'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '035290b197689bd45c91b63de053afdc'
                        key: {
                            model: '075290b197689bd45c91b63de053afd4'
                            element: 'meeting_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0352d0b197689bd45c91b63de053af01'
                        key: {
                            name: 'var__m_sys_hub_action_output_b65290b197689bd45c91b63de053afc8'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0352d0b197689bd45c91b63de053af1a'
                        key: {
                            name: 'var__m_sys_hub_action_output_b65290b197689bd45c91b63de053afc8'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0353aec050ef4ac4a2bb06dde02b42f2'
                        key: {
                            document_key: '1e653f76d6af457ea00ee1885550e750'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '035c916497a45f945c91b63de053af72'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            caption: 'Notes'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '039e3f3334ee421e92f5a4efbf68454a'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_exemption_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '03a531bc941543c59a464715ec05bf2a'
                        key: {
                            id: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '040c5344996c4f10a96e610d0b56ab52'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_basis'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '044445fd9760dbd45c91b63de053af35'
                        key: {
                            id: '87e35cfe1c8942ed9058323be87918dc'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '046294b197689bd45c91b63de053afae'
                        key: {
                            id: '735254b197689bd45c91b63de053af9d'
                            table: 'var__m_sys_hub_action_output_735254b197689bd45c91b63de053af9d'
                            field: 'group'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '04fdee9a3d374e54b460c883d9697754'
                        key: {
                            document_key: '7b02acd66cb947899b84fe455b8b9100'
                            variable: '54c49bc60f3200102920c912d4767ee2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '050c7b2a027f4f32b77188685eaaaff9'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0524ff2e3e694c1c87aa0820335aadfb'
                        key: {
                            id: '1e653f76d6af457ea00ee1885550e750'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '054752bf798c4b129a5752902aa8d4fb'
                        key: {
                            id: '1e653f76d6af457ea00ee1885550e750'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0569c2a2c9804bf9b9a043cfbc14fb90'
                        key: {
                            name: 'var__m_sys_hub_action_output_2447c57edaca4662b1d0b2ec06473733'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '056c95642bac1f90b7b1f93a5e91bf38'
                        key: {
                            sys_ui_section: {
                                id: '035c916497a45f945c91b63de053af72'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '05b2bba5c1dc41108c89719e24f45a46'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'director_certified_by'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '05f9cceb083b44e289994ed06672e35c'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_workforce_start'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '06009a457ce440429dd3bceb95122f2f'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_vacated_pers_num'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '065d38bbf411471f8409bde6642da1aa'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_vacancy_reason'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '06992a0c598144838f60f1be58e36e98'
                        key: {
                            document_key: '473a7ba95d224dd585a0102ab64a7423'
                            variable: '98c44875ffa033008d3f5d9ad53bf1fa'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '06996d6fb0264caeb71277b1cd137535'
                        key: {
                            sys_ui_section: {
                                id: 'f6a85aa2900446eaa7cbdb89061e2be8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Committee / OPM Decision'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_committee_decision'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '06ce8ee4f1c04092bf6049bbf6667976'
                        key: {
                            document_key: '47efe189ba0a46b79924e3ac053c6022'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '0710fe7b498a4574812ab49e2d5a89d0'
                        key: {
                            model: 'f33477e70d09408ca4110f327692afb8'
                            element: 'basis'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '075102c228b44e25b72e8b11c388075c'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'committee_decision'
                            value: 'denied'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0752d0b197689bd45c91b63de053af23'
                        key: {
                            id: 'b65290b197689bd45c91b63de053afc8'
                            table: 'var__m_sys_hub_action_output_b65290b197689bd45c91b63de053afc8'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '078979098d6e4fdca2db5e5e2822f897'
                        key: {
                            document_key: '95d0138cb1c04c10ae87ed5d790f2663'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '078a2d315c0545b1b421e455c2dc469f'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_hub_flow_input_8ec899171b934150db4bba63cc4bcb22'
                            field: 'approver'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '079a391e38b84c279dd96fd73caa82e4'
                        key: {
                            id: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '07b98fba357f4d7b98b488e762cd9e4d'
                        key: {
                            document_key: '47efe189ba0a46b79924e3ac053c6022'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '07ce395eb3b147d4b632ab621e5ba2ca'
                        key: {
                            id: '668bb3d7b59d47a790107daefbc48bfa'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_sla'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '07d8c6b775894d0680efd41fb0241c14'
                        key: {
                            id: '8668824cf52647e48b2074cec54f4a1b'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_checklist'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0800c213c56243fca3d0471790716aae'
                        key: {
                            document_key: '0006de7a35ef4ce89a9123f432c40783'
                            variable: '306499fbff001010393e53bd6338f1da'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0804afaee6d8489fbfc82f60140df84f'
                        key: {
                            id: 'd9938bb6667c429c8c967e2ce0c9052f'
                            table: 'var__m_atf_input_variable_1f39a288df60220062fe6c7a4df2639d'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '0823d6f3534b4b068b4082aa1d9c7751'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_position_info_split'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '084405fd9760dbd45c91b63de053afbf'
                        key: {
                            id: '78f61d054d51482e8b9b67bbd8a008cc'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '084445fd9760dbd45c91b63de053af36'
                        key: {
                            id: '87e35cfe1c8942ed9058323be87918dc'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '084445fd9760dbd45c91b63de053af46'
                        key: {
                            id: '98550521df1f41698f32cce052bf2575'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '084445fd9760dbd45c91b63de053af60'
                        key: {
                            id: '9a9a4ba253254c9db6514aaf0fb9698d'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '08543644179541519b0033a5e0fcc9e0'
                        deleted: false
                        key: {
                            ui_policy: '562141bda5a04b229dd2420a0ec05926'
                            field: 'u_hire_pers_num'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '086294b197689bd45c91b63de053afac'
                        key: {
                            id: '735254b197689bd45c91b63de053af9d'
                            table: 'var__m_sys_hub_action_output_735254b197689bd45c91b63de053af9d'
                            field: 'analyst'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0869f99a5f3240e98ee56107a619a741'
                        key: {
                            id: '029b6913dbf74698a0f6606c43053d29'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '08fc1c0ebbfa4dd1ba96ef6b6cfe0dd0'
                        key: {
                            sys_security_acl: '951bdd2f69164f99ace3913be3ba6f4d'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '091422a5ddd342bf86e6432121818a90'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: '9d2ff6a7c3611010381b60bc0eba8f3c'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '095367865edf4df4b45d847e22df48ee'
                        key: {
                            name: 'asmt_metric_type'
                            element: 'ms_adaptive_cards'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '095589b197a0dbd45c91b63de053af5b'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'is_automated'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '095589b197a0dbd45c91b63de053af5e'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'record_fields'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '095589b197a0dbd45c91b63de053af62'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '7cb449e85b41001070e4492c11f91a06'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '095589b197a0dbd45c91b63de053af70'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '6688ff5d0700101070e493d0fad300f6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09c528a351ea4b03b15c619f42ea2247'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'opm_comments'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a2ee47de71e4153821a164b19e3bbaf'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'director_certified_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0a340726de834d56a80295b5bc093f12'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'employment_type'
                            value: 'extra_help'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0a7611c3fe2b417cb234b458192a420f'
                        key: {
                            document_key: '1a7528b183e94354955dc352b9973adc'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0aa2c492c76449e9a7eda195d2fdcec8'
                        key: {
                            id: '2d362e4001784e2a847b6d64fac16074'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0aaa9e07ac7140fca864ae761b4f01b6'
                        key: {
                            sys_security_acl: '6482254b7bc14477b2510a15779068b2'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0afea82819ab4df7acae9181cd71d980'
                        key: {
                            document_key: 'c7d96757741e42359ba3d689bd97f494'
                            variable: '661d304673030010fe4a6da44cf6a7b1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0b3daf652aad42a1827fda6628892dd9'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_vacancy_reason'
                            value: 'transfer'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0b528c21834346948f06a626ab4cf9e5'
                        key: {
                            sys_ui_section: {
                                id: '77c1ca7b633f41b5afc3eac3b940ab64'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Position Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_position_number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '0b7298f197689bd45c91b63de053af7d'
                        key: {
                            model: '8f7298f197689bd45c91b63de053af7a'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0b77c82c979f47cea985bf800407ddf7'
                        key: {
                            id: '2d362e4001784e2a847b6d64fac16074'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0b925e73a6a649099a1e20064c3d9376'
                        key: {
                            document_key: 'c7d96757741e42359ba3d689bd97f494'
                            variable: '267e68875b00001070e4492c11f91a34'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0bc64ceba43c40a9966b86a81cf65db6'
                        key: {
                            document_key: '8668824cf52647e48b2074cec54f4a1b'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0c0e2b5f559843109c2c693595a81b84'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'classification'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0c3d01cf042d4833b67389afbc10a1db'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'funding_source'
                            value: 'special_revenue'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '0c4405fd9760dbd45c91b63de053afc0'
                        key: {
                            id: '78f61d054d51482e8b9b67bbd8a008cc'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '0c4445fd9760dbd45c91b63de053af47'
                        key: {
                            id: '98550521df1f41698f32cce052bf2575'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '0c4445fd9760dbd45c91b63de053af57'
                        key: {
                            id: '98901d72cc7b41f1a71cc83202d39125'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '0c4445fd9760dbd45c91b63de053af61'
                        key: {
                            id: '9a9a4ba253254c9db6514aaf0fb9698d'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '0c6254b197689bd45c91b63de053afea'
                        key: {
                            model: 'fb5254b197689bd45c91b63de053afcb'
                            element: 'director'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0c6294b197689bd45c91b63de053af0e'
                        key: {
                            id: 'fb5254b197689bd45c91b63de053afcb'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '0c6294b197689bd45c91b63de053af3c'
                        key: {
                            model: '735254b197689bd45c91b63de053af9d'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0c7c2c806baa4156a61fe4a724e45e39'
                        key: {
                            id: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0ca9b4b8c01049a5a735760ea2c2ea95'
                        key: {
                            document_key: '2dda10504e464176a36a179d6f7d2514'
                            variable: 'eb0474b8c763001085f5532bb4c260f5'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '0d1f65408fb64ce897a5437b17649f9f'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_justification_split'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0dca359c6bd04d2e9c2b7b2bf574cc6d'
                        key: {
                            document_key: '7b02acd66cb947899b84fe455b8b9100'
                            variable: 'd803775a5b01001031a67d6f7281c7aa'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0dd2797a14df46c48a258a4464a5b618'
                        key: {
                            sys_ui_section: {
                                id: '1e645db421b84e01bff3ac57ded4bede'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Funding'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_fund_src_1'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '0e243b74e7654f2ca1ba4ea37abc4f23'
                        key: {
                            logical_table_name: 'x_snc_sas_positi_0_classification'
                            col_name_string: 'job_series'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0e9d5c19e37f4cab895f093736ca96f0'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'key_leadership_title'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0f31e393dba54a519113a3377cd12d10'
                        key: {
                            sys_security_acl: '80e756475cd94f2d946cf94e67e539fc'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f7298f197689bd45c91b63de053afa2'
                        key: {
                            name: 'var__m_sys_hub_flow_input_8f7298f197689bd45c91b63de053af7a'
                            element: 'decision'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f7ad1e4497d4229abc24e54a3087344'
                        key: {
                            name: 'var__m_sys_hub_flow_input_312a6676ff8a49bb87cac61b44bdd7f6'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0ff517990b38432c968f5fb4cb7ab32c'
                        key: {
                            id: '0006de7a35ef4ce89a9123f432c40783'
                            table: 'var__m_sys_pd_activity_type_prop_dc6459fbff001010393e53bd6338f1cb'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '10361c024abf4741bf9f14190daa6647'
                        key: {
                            document_key: '95d0138cb1c04c10ae87ed5d790f2663'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '103f4f452eef478fb46cd7d64fa39bb2'
                        key: {
                            sys_security_acl: '3a0445d0d0de4137b38c735eb1439e60'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '104445fd9760dbd45c91b63de053af73'
                        key: {
                            id: 'a2e9b848067d471e861a8f920931709c'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '104445fd9760dbd45c91b63de053af83'
                        key: {
                            id: 'abf476e7687846c09926ed348afb859c'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '104485fd9760dbd45c91b63de053af09'
                        key: {
                            id: 'bae6192d078840ab9110b898f307f246'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '10640a2a9b9d4cb39387f3a0c51d81f1'
                        key: {
                            document_key: '1f0c54535e16496ebdccde97e6b853f6'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '106f003aa901401eb5ae0faaa71604e1'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'position_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1071884a40ca4fe68ee328b2bb20572f'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacated_personnel_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '10cbc944331e4f47b270fe366efc02bb'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacancy_reason'
                            value: 'transfer'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '1121b980f9774d9d86de7f8985800c76'
                        deleted: false
                        key: {
                            ui_policy: '366df80401334a2ead8b3c5b0ca892d2'
                            field: 'u_unbudget_position'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '11275e4b20364c25abefbe592ebef9e0'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'offset_position_number'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '116314a997a8d7d45c91b63de053af50'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1182503597689bd45c91b63de053afa0'
                        key: {
                            name: 'var__m_sys_hub_flow_output_1d82503597689bd45c91b63de053af67'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '11d0df65b9bd48f68f50b61e54f90110'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_candidate_info_split'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '12091c08e0d2475c88626b746272fe69'
                        key: {
                            document_key: '029b6913dbf74698a0f6606c43053d29'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '12704c421f9f4938b4144d2ab8e2279a'
                        key: {
                            document_key: '19bd5ccad4f2449786af9003457d1c5a'
                            variable: '0f4e18f6c7ad5110bfbaf89f51c260f0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '12b2269b3a0e44e8a547482c89a8d683'
                        key: {
                            document_key: '41aad94c2ca54d829d5cbde201a6c0ff'
                            variable: '736b784a8c564b60947b631109a186c8'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '12efbc319760dbd45c91b63de053af32'
                        key: {
                            sys_ui_form: {
                                id: '8aef3c319760dbd45c91b63de053af8d'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '8aefbc319760dbd45c91b63de053af16'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'sn_gsm_government_service_task'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '12effc319760dbd45c91b63de053af5a'
                        key: {
                            sys_ui_form: {
                                id: '16efbc319760dbd45c91b63de053af6e'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '1334c1fd9760dbd45c91b63de053af41'
                        key: {
                            id: '01e81f707d8c4533be5301e34128ace7'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '1334c1fd9760dbd45c91b63de053af8e'
                        key: {
                            id: '14e24be9516245e58c2c085176a73d4d'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1360b8146a844340af98f34c93979411'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '136c2960aea942c281536b6c9170209d'
                        key: {
                            document_key: '9179ef7f351a48b6a83fa37ba5625a36'
                            variable: '1778a7480f20101091d0f00c97767e03'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1377e4308d8d425e9d7cc065d2187e97'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            value: 'closed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '13d02be474be44d8b41f9dd6ecbe5980'
                        key: {
                            id: '99be11b492bf4f5d85bf773a30dd7178'
                            table: 'var__m_atf_input_variable_071ee5b253331200040729cac2dc348d'
                            field: 'user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '13e595294b24410588c1337e01eaae28'
                        key: {
                            name: 'asmt_metric_type'
                            element: 'ms_adaptive_cards'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '13f5803c3e654593a44f7fb746ef2571'
                        key: {
                            document_key: '4115562f58cb41309eaf374d82137410'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '14230b4eddb040848f98ce80fc4b2175'
                        key: {
                            id: '1e653f76d6af457ea00ee1885550e750'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '144445fd9760dbd45c91b63de053af84'
                        key: {
                            id: 'abf476e7687846c09926ed348afb859c'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '144485fd9760dbd45c91b63de053af0a'
                        key: {
                            id: 'bae6192d078840ab9110b898f307f246'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1444fb1f2dd34061ac2686e8dde83a16'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'duties_absorbed_explanation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14556f28b3fe4922810390d6333d9173'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_type'
                            value: 'internal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '14b1844fca4b433a81ce672ca18f3d49'
                        key: {
                            name: 'var__m_sys_hub_flow_input_89eff1961597477c8a476f6e2f451de1'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '14b953c310f649e190e6e90dcfab2418'
                        key: {
                            id: '029b6913dbf74698a0f6606c43053d29'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_sla'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '14e24be9516245e58c2c085176a73d4d'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_vacancy_info_end'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '15131bfbe73245e997d5bd99b1f9bf76'
                        key: {
                            id: '4115562f58cb41309eaf374d82137410'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_sla'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '15546f7b85f04fd987b0ebccd068f1c8'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_fund_src_1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '156cd16497a45f945c91b63de053af5a'
                        key: {
                            sys_ui_section: {
                                id: '035c916497a45f945c91b63de053af72'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1582503597689bd45c91b63de053af77'
                        key: {
                            name: 'var__m_sys_hub_flow_input_1d82503597689bd45c91b63de053af67'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '15bbe681d9484ca28b3a0c2e39fd7f0f'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_fund_src_2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '15bd0521a19a47f29f2e13a98c0efd28'
                        key: {
                            sys_ui_section: {
                                id: 'dc56d3e529734e42a9852ea20a574160'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Justification'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_just_absorbed'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '15d1e5f55f6d440c9ec8b9e0d83b685c'
                        key: {
                            id: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1615f4fcd6fe49be822d3bc4fbe0c948'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'funding_pct'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '164b93719edc464385cf3c831d82ada0'
                        key: {
                            document_key: '5c8e2290804545679d5b960641c4e408'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '16629cb197689bd45c91b63de053af35'
                        key: {
                            model: '9a629cb197689bd45c91b63de053af32'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '169a4d22c3ec489dbe6a18d5e89fa9a0'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_fund_src_1'
                            value: 'federal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '16b57582504b4cccbdab6f79b6fdb13f'
                        key: {
                            document_key: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '16efbc319760dbd45c91b63de053af46'
                        key: {
                            sys_ui_section: {
                                id: '1eefbc319760dbd45c91b63de053af32'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '16efbc319760dbd45c91b63de053af6e'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '16effc319760dbd45c91b63de053af73'
                        key: {
                            sys_ui_section: {
                                id: '1eeffc319760dbd45c91b63de053af5a'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '9aeffc319760dbd45c91b63de053af71'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '16effc319760dbd45c91b63de053af74'
                        key: {
                            sys_ui_section: {
                                id: '1eeffc319760dbd45c91b63de053af5a'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '16effc319760dbd45c91b63de053af75'
                        key: {
                            sys_ui_section: {
                                id: '1eeffc319760dbd45c91b63de053af5a'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes_list'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '16effc319760dbd45c91b63de053af76'
                        key: {
                            sys_ui_section: {
                                id: '1eeffc319760dbd45c91b63de053af5a'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'comments'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '16effc319760dbd45c91b63de053af9a'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            view: {
                                id: '739763c0a3d50210974f00dfe51e611d'
                                key: {
                                    name: 'conductInterview'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '17108a67c60b467687a9f0acffcc2ff2'
                        key: {
                            id: '2d362e4001784e2a847b6d64fac16074'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '17289839b5e4497c9ffbe9f57b58338f'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_department'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '174da9d8961a42419d566c857da18a7d'
                        key: {
                            sys_security_acl: 'a6d664bc688e4bf5a350d92d7f9d23c8'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '175214b197689bd45c91b63de053af8f'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_575214b197689bd45c91b63de053af60'
                            element: 'basis'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1760ece6a0b843f2b3003ad0acd85d66'
                        key: {
                            sys_security_acl: 'a4bde341530648989680cd810741110e'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '17ecb9a3a7614709ac994e921dbfdf3c'
                        key: {
                            document_key: '4ff13d8d325a433ca544b90a61563cde'
                            variable: '736b784a8c564b60947b631109a186c8'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '181762eb07b443db92d04d69aa1ce1c9'
                        key: {
                            id: '220401ea2994417aa81b58c360d16ecb'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'icon'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '184445fd9760dbd45c91b63de053afa4'
                        key: {
                            id: 'b462dc0ca27f41158af55eb47e7aa067'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '18d7e7b21b614d548bf547e866130d83'
                        key: {
                            name: 'var__m_sys_hub_flow_input_ace0bfa0c29c46d2831f2d3af2e375cf'
                            element: 'next_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '18f3a8848bc042e6980cc252fc71bef3'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_just_absorbed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '18f9393c88204944a73dd156f191d845'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'advertising_exempt'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '190d485665db484984ffff9e81bb06c3'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '192abda524ed40a2ba5f78c5d6631934'
                        key: {
                            document_key: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '19474e48d9634bad8d8fa14dd52e1ab3'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_basis'
                            value: 'not_required'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '196931c5428f4ffb90c1f90f284ae83a'
                        key: {
                            document_key: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            variable: '54c49bc60f3200102920c912d4767ee2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '19bb48f991a5450f8e6ef26d8872f098'
                        key: {
                            document_key: '3e5ebddc46ba4f668c4d0c3e91fea8cc'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1a01fb340fbe44bca1ca3735c7f54695'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'list_query'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1a2a32600f3847d480c045ef90ba9208'
                        key: {
                            document_key: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            variable: '4f9fdae51bbb001094630f28cc4bcb66'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1a53ae47611f42088d434d8facd258e6'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_funding_end'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1a66adb5d4a5405fb8bd6cfd7d86650f'
                        key: {
                            sys_ui_section: {
                                id: '5c5795a9d90e4faa95915618d3308b04'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Vacancy Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1a6ac0979f334d48b96fc30bc42dc04c'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a7258f197689bd45c91b63de053af06'
                        key: {
                            name: 'var__m_sys_hub_flow_input_de7218f197689bd45c91b63de053af94'
                            element: 'next_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1a9592d2b75943d6a8a1f409c927507e'
                        key: {
                            id: 'fe6b0faf01664ca99d417bea0c03be98'
                            table: 'var__m_sys_pd_process_input_6cffbae2a011462eb254c4014da4d7ce'
                            field: 'parent_record'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1aa5b53c34384fdaa1f7b8bdecb5c455'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'job_title'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1ac56ba5973d4d4e99923058f95c5f7f'
                        key: {
                            id: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ad91c88a306418da517400a968f52d6'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'salary_exceeds_threshold'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ae42c544b03452cb4c9109bdd4c0ea6'
                        key: {
                            name: 'var__m_sys_hub_flow_output_7370b74da3334152a795ea48d819b8e8'
                            element: 'basis'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1aeffc319760dbd45c91b63de053af56'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'Notes'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1b00c0d0668643c7b18a089c854e9faa'
                        key: {
                            sys_ui_section: {
                                id: 'a0700e8c5c614fb79367e7bb27d8ef11'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Candidate Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1b364f67181b46e3a88d8a8c99e60b15'
                        key: {
                            id: '807b0634bd944d69951e9fe1cf3f2e81'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '1b5925a4bc7242a895c87845e81fc1ea'
                        key: {
                            role: {
                                id: 'bad98a5dad3e4fb9b7cba80f590aa614'
                                key: {
                                    name: 'x_snc_sas_positi_0.committee'
                                }
                            }
                            contains: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b8f9880de3247b6acb33d369be7d428'
                        key: {
                            name: 'var__m_sys_hub_flow_output_4e9c593b813d43faae56cda8f14cedc9'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '1c4445fd9760dbd45c91b63de053af71'
                        key: {
                            id: 'a2e9b848067d471e861a8f920931709c'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '1c4445fd9760dbd45c91b63de053afa5'
                        key: {
                            id: 'b462dc0ca27f41158af55eb47e7aa067'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1c4c4ff5e6314a7cb94693973226ebff'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_budget_status'
                            value: 'unbudgeted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1c8d32b6f447461c8c6381e24ffd32ac'
                        key: {
                            document_key: '8c1c00af0e93445fa849f1b40c4271df'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1cbfa5f16cb7447c9031787c867fc59f'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1d03ef8251b74b8a98d31d3a5e649b25'
                        key: {
                            sys_security_acl: 'dd989afec66741798376c14c6e0e06a1'
                            sys_user_role: {
                                id: '2b2ddd98bd864e0a8d50f609d55ca7e2'
                                key: {
                                    name: 'x_snc_sas_positi_0.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1d047803ace347f7a42d8543d7246551'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'committee_meeting_date'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1d1c2edd52fa47ee8411b1b8da38637b'
                        key: {
                            id: '4115562f58cb41309eaf374d82137410'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1d402a1226b2477b82b513137ba54573'
                        key: {
                            document_key: '1e653f76d6af457ea00ee1885550e750'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1d6c95642bac1f90b7b1f93a5e91bf3e'
                        key: {
                            sys_ui_section: {
                                id: '035c916497a45f945c91b63de053af72'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1ddb8c355a1647fe870c54adbec6b9f3'
                        key: {
                            document_key: '473a7ba95d224dd585a0102ab64a7423'
                            variable: '1778a7480f20101091d0f00c97767e03'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1ddd9816d6744d978b2a6df93b856c18'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: '66c5b3885b16001022527d6f7281c77c'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1ded99f3ebc94c4caf9e5b6676bed496'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            value: 'revision_requested'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1e09ca2daa3b462990aafaef3d1cf076'
                        key: {
                            document_key: '220401ea2994417aa81b58c360d16ecb'
                            variable: '55628762c3211010381b60bc0eba8fec'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '1e3bc852ae8746c2a515fe49609c7f8d'
                        key: {
                            question: 'f003b637323e41cf93e748069646804e'
                            value: 'budgeted'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1e5e6d5662e6440eb6af022449708254'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1e645db421b84e01bff3ac57ded4bede'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            caption: 'Funding'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1e66b32390e74831839784f056ffec81'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_department'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '1e7218f197689bd45c91b63de053afa7'
                        key: {
                            model: 'de7218f197689bd45c91b63de053af94'
                            element: 'activity_name'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1eae2362fa00476fa3489475ff66fe86'
                        key: {
                            document_key: '029b6913dbf74698a0f6606c43053d29'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1eefbc319760dbd45c91b63de053af32'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'Notes'
                            view: {
                                id: 'd58d1516771042103b35bfa64b5a995e'
                                key: {
                                    name: 'PlaybookProposeDecisionSB'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1eefbc319760dbd45c91b63de053af7b'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1f07c73e17bd4bb3889db840f3fb610f'
                        key: {
                            sys_security_acl: 'e4b5aa387ac5490fa8da7a7b7125b95c'
                            sys_user_role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1f0a289151f84341a2c07d5a8d1d4d64'
                        key: {
                            document_key: 'c7d96757741e42359ba3d689bd97f494'
                            variable: 'eb0474b8c763001085f5532bb4c260f5'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '1f34c1fd9760dbd45c91b63de053af8c'
                        key: {
                            id: '14e24be9516245e58c2c085176a73d4d'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '1f3ab74ed388432a9ea8598bd4cd58c5'
                        key: {
                            model: '7370b74da3334152a795ea48d819b8e8'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                        key: {
                            name: 'x_snc_sas_positi_0.requester'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1f8aed01334a45249b8e976fee663a65'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1fdbe0b641a5425390ec6c90e7365383'
                        key: {
                            sys_security_acl: 'dd989afec66741798376c14c6e0e06a1'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '203889a629094803a65288ded70b2e7a'
                        key: {
                            name: 'x_snc_sas_positi_0.admin'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '206f4540422942d1826163ac83729405'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_budget_status'
                            position: '4'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '2076fad19bf247aeb4c780c8de1f22e7'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_authorized_count'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '20adef39e5f0407884d590a7b6cdea95'
                        key: {
                            document_key: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            variable: '5fa0e1f287d300102252c88fc0e3ec66'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '20b64e3024964ef6bb89cd129d237622'
                        key: {
                            document_key: 'e6728198f65942229535b889f83873b0'
                            variable: '8c07aba5ff6033008d3f5d9ad53bf13b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '20d6748099e54a43986ee2ecf84a3ee4'
                        key: {
                            document_key: '51529c853058462aa759f87a4bda5de2'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '210febef02f2426ca70a9b38f56052d9'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'requested_salary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '21284ae40c53432290dd11cf73703747'
                        key: {
                            id: '9b1bdab7f6584729ae3809d69c2ecf78'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '212dd433c39e449b905e0ea12bb012c0'
                        key: {
                            id: '029b6913dbf74698a0f6606c43053d29'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21c1b9e30b8d4807b9021b133ceb1852'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'position_number'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2208db779d2449deb9e71eac3438d20b'
                        key: {
                            document_key: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2234f5ae44a64109b2828b08ef3d9d82'
                        key: {
                            document_key: 'd9938bb6667c429c8c967e2ce0c9052f'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '227b65e9687545729729555a4202c754'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'streamlining_fit'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '22a6d9d34dde4ca3ba1544680135a038'
                        key: {
                            id: '1e653f76d6af457ea00ee1885550e750'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '22b48ea7fa7047f28368a8a9a99eb2b5'
                        key: {
                            name: 'service_offering'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '22c38a7d6d8b4807b752d0bf81cd6bbb'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'icon'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '22ef30719760dbd45c91b63de053afa7'
                        key: {
                            sys_ui_section: {
                                id: '2aef30719760dbd45c91b63de053af96'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'comments'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '22ef30719760dbd45c91b63de053afa8'
                        key: {
                            sys_ui_section: {
                                id: '2aef30719760dbd45c91b63de053af96'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '22ef30719760dbd45c91b63de053afa9'
                        key: {
                            sys_ui_section: {
                                id: '2aef30719760dbd45c91b63de053af96'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '22ef30719760dbd45c91b63de053afaa'
                        key: {
                            sys_ui_section: {
                                id: '2aef30719760dbd45c91b63de053af96'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes_list'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '22ef30719760dbd45c91b63de053afab'
                        key: {
                            sys_ui_section: {
                                id: '2aef30719760dbd45c91b63de053af96'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '22ef30719760dbd45c91b63de053afac'
                        key: {
                            sys_ui_section: {
                                id: '2aef30719760dbd45c91b63de053af96'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'watch_list'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2313413182da4433a9bd0b6f116069a4'
                        key: {
                            id: '2dda10504e464176a36a179d6f7d2514'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2314ecb1b7c04575b85f3595d0745227'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f71d6da96e444011a9f4c089338c3268'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '2334c1fd9760dbd45c91b63de053af9e'
                        key: {
                            id: '1a53ae47611f42088d434d8facd258e6'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '2334c1fd9760dbd45c91b63de053afec'
                        key: {
                            id: '38c633c09a4447c38e752a3f6a2e3c0c'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '233b80dbdb9c44a293751e545b11e6fd'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'submitted_on'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '234497dd079741c3b844d4a623bdd3aa'
                        key: {
                            id: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_checklist'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '235254b197689bd45c91b63de053af16'
                        key: {
                            document_key: '1f5214b197689bd45c91b63de053af0b'
                            variable: 'ab5214b197689bd45c91b63de053afbe'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '236210f197689bd45c91b63de053af9d'
                        key: {
                            model: 'ef6210f197689bd45c91b63de053af8d'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '238863ad059341b28fd5fb6ac8b7e71c'
                        key: {
                            name: 'var__m_sys_hub_action_output_fed85ed115a54408852597482a71c3aa'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '239e855a3e684f2a9045354fd3b29b45'
                        key: {
                            document_key: '51529c853058462aa759f87a4bda5de2'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '23aaf0664c5d46ce9a13ed3a63c163c7'
                        key: {
                            document_key: '09f943cf48f846b299d9f1d9cfa65a45'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '23af403c484242f4ac62f3ad39fc2058'
                        key: {
                            document_key: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '23c6a2531947424f8a3fd38f63f403f1'
                        key: {
                            id: '2d362e4001784e2a847b6d64fac16074'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '23d0caa893f54b58999915ceaa06454e'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            value: 'not_required'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '245fbf72c4c74d5ca8f445201dcdd5eb'
                        key: {
                            id: '4115562f58cb41309eaf374d82137410'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24b5e835216f4093ac68c7f79949685d'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'title_contains_director'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '24d77eec0ce74a729116991e329675e1'
                        key: {
                            model: 'd04881f1f8fe4ad6bc1cc70c5a70b0e9'
                            element: 'case'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '25098392ef75435faddea864956c55a2'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_city_location'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '257294f197689bd45c91b63de053afbb'
                        key: {
                            model: 'a97294f197689bd45c91b63de053afb8'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '25752111dc7f475f98880305600396f7'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_budget_status'
                            value: 'budgeted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '25a7821637d24554b5ed7521167b8d7e'
                        key: {
                            model: '4e1251c2235d4d28b28f86c4b58deab5'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25a83edfbf3f400c91881c50bc0fb33b'
                        key: {
                            name: 'service_offering'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '25d3e7abacf94f85a8ec11f9aa195e03'
                        key: {
                            document_key: '09f943cf48f846b299d9f1d9cfa65a45'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '2620a9cd267f450fb822d1d8983bf8cd'
                        key: {
                            name: 'x_snc_sas_positi_0.fulfiller'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26420376b9d94d27a59cb3a768d6b9dc'
                        key: {
                            name: 'var__m_sys_hub_action_output_fed85ed115a54408852597482a71c3aa'
                            element: 'analyst'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2656a395630a4ff5929e918b157c16e8'
                        key: {
                            document_key: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            variable: 'd6d1f7585b92001022527d6f7281c7cc'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '266a081a81f34847b987cd60493ab0b7'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: 'd6d1f7585b92001022527d6f7281c7cc'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '267ccb44d81e4aa7a3fd9ff3eccc42be'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '26c4a003e62c4da3b20cf9430de5aab3'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'funding_source'
                            value: 'general_revenue'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '26ef30719760dbd45c91b63de053afbf'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            view: {
                                id: '0b28fe81ec8003108bb2d76241880c97'
                                key: {
                                    name: 'workspace'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '26ef70719760dbd45c91b63de053af49'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '26ef70719760dbd45c91b63de053af4a'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '26ef70719760dbd45c91b63de053af4b'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '26effc319760dbd45c91b63de053affe'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            view: {
                                id: 'd9a85e2493f08310d6b527dbd7373cf8'
                                key: {
                                    name: 'case'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '26fb840e893446c6acc3c7334317fd8a'
                        key: {
                            document_key: 'fe6b0faf01664ca99d417bea0c03be98'
                            variable: '38c838790f0010108c87f4f0ff767e5a'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '273278274d3c447b98e084cff9dd831a'
                        key: {
                            id: '029b6913dbf74698a0f6606c43053d29'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assigned_to'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '2734c1fd9760dbd45c91b63de053af9f'
                        key: {
                            id: '1a53ae47611f42088d434d8facd258e6'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '274d99ad9d8e4022a718e6cefe8000fe'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: '3f9d744673030010fe4a6da44cf6a7b9'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '275214b197689bd45c91b63de053afb0'
                        key: {
                            id: '575214b197689bd45c91b63de053af60'
                            table: 'var__m_sys_hub_step_ext_input_575214b197689bd45c91b63de053af60'
                            field: 'case_sys_id'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '275254b197689bd45c91b63de053af15'
                        key: {
                            id: '1f5214b197689bd45c91b63de053af0b'
                            table: 'var__m_sys_hub_action_output_1f5214b197689bd45c91b63de053af0b'
                            field: 'basis'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '27527e1a23d04f4c8dc9ad45898bc917'
                        key: {
                            id: '9b1bdab7f6584729ae3809d69c2ecf78'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '27828f123c1446f7ae6d83cd63279d52'
                        key: {
                            id: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '27ce758b7b784d1caed960c9ede690e4'
                        key: {
                            id: '7b02acd66cb947899b84fe455b8b9100'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '282dc5be806d4e3eaaa7c9f9ecb8ab64'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2852c57c0c1944ff8ac2bb32201c7687'
                        key: {
                            sys_security_acl: '7fa2c36af900469aa68ed3f47dfaff8c'
                            sys_user_role: {
                                id: 'bad98a5dad3e4fb9b7cba80f590aa614'
                                key: {
                                    name: 'x_snc_sas_positi_0.committee'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '2862adefa7e64b27a42d51cbbf341fc8'
                        key: {
                            logical_table_name: 'x_snc_sas_positi_0_funding'
                            col_name_string: 'parent_case'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '2882dcf197689bd45c91b63de053afb5'
                        key: {
                            model: 'ac82dcf197689bd45c91b63de053afb2'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2882dcf197689bd45c91b63de053afd4'
                        key: {
                            name: 'var__m_sys_hub_flow_output_ac82dcf197689bd45c91b63de053afb2'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '29194111f0f44e2489d4de455f69f9d1'
                        key: {
                            sys_ui_section: {
                                id: '77c1ca7b633f41b5afc3eac3b940ab64'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Position Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_grade'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '292672848d984b87874d8c4cfe858ed0'
                        key: {
                            document_key: '0006de7a35ef4ce89a9123f432c40783'
                            variable: '737ebe67c3611010381b60bc0eba8ff9'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2950144866e945e09511fc440f8cde6d'
                        key: {
                            document_key: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '298dd3bd0e1f4d789abddc7591a913f3'
                        key: {
                            sys_ui_section: {
                                id: '1e645db421b84e01bff3ac57ded4bede'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Funding'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '29ec06b0e46d4eb2bf2c3763abc47186'
                        key: {
                            document_key: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            variable: '54c49bc60f3200102920c912d4767ee2'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '29f8963e97d4db545c91b63de053af63'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2a0d166698eb4a3d9756bd99de692178'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'budget_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2a2fa7aa168e40649feea01779f153e2'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            value: 'opm_review'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2a3b2574bfa34e05bf7b09e6ae162831'
                        key: {
                            document_key: '9b1bdab7f6584729ae3809d69c2ecf78'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '2a5250b197689bd45c91b63de053afc3'
                        key: {
                            model: '6e5250b197689bd45c91b63de053af62'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '2a5250b197689bd45c91b63de053afd8'
                        key: {
                            model: '6e5250b197689bd45c91b63de053af62'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2a970f18218a4b279fe326882c9afc8f'
                        key: {
                            sys_ui_section: {
                                id: 'f6a85aa2900446eaa7cbdb89061e2be8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Committee / OPM Decision'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2aa5d224fcc845b984134a1f4759724e'
                        key: {
                            id: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2acb35d5aa7c48a4b7519c8b2f1df3a9'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'hiring_freeze_exempt'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2ad6b33ad16249ad90a10c11352c61cc'
                        key: {
                            document_key: 'f749db0c4961417caef370d8e3453a38'
                            variable: '4cf4ffc9732741d8971f6ea32d457a90'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aef30719760dbd45c91b63de053af1e'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aef30719760dbd45c91b63de053af1f'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'contact'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aef30719760dbd45c91b63de053af20'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'proposed_decision'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aef30719760dbd45c91b63de053af21'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aef30719760dbd45c91b63de053af22'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aef30719760dbd45c91b63de053af23'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent_case'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aef30719760dbd45c91b63de053af24'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'consumer'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aef30719760dbd45c91b63de053af25'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aef30719760dbd45c91b63de053af26'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aef30719760dbd45c91b63de053af27'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aef30719760dbd45c91b63de053af28'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'account'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aef30719760dbd45c91b63de053af29'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aef30719760dbd45c91b63de053af2a'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '2aef30719760dbd45c91b63de053af96'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'Notes'
                            view: {
                                id: 'a22b4ae3b7702110f94f20b3ae11a980'
                                key: {
                                    name: 'Checklist'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2b121047b405495ead86782fdc02f65b'
                        key: {
                            id: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '2b29bc94be604fd5997613de645594c3'
                        key: {
                            model: '51529c853058462aa759f87a4bda5de2'
                            element: 'meeting_date'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '2b2ddd98bd864e0a8d50f609d55ca7e2'
                        key: {
                            name: 'x_snc_sas_positi_0.approver'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2b54815388b145b08f68d8210ef48528'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2baa947b14624369b2a243a2b66027a2'
                        key: {
                            document_key: '1f0c54535e16496ebdccde97e6b853f6'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2bbe794204af40d68d70f24db5822467'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_vacancy_reason'
                            value: 'promotion'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2bbfd74ea19a4b1eb6367acb0101ffae'
                        key: {
                            sys_security_acl: 'eb39388303534b54b3b96b22072e4d34'
                            sys_user_role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c11a43c46d1462394e48db9055800b6'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'parent_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2c2d40afe1e84229a744aed988b36ef6'
                        key: {
                            document_key: '445daa2135034d668c9d6417f33df07a'
                            variable: '074e5876c7ad5110bfbaf89f51c26087'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2c339b41c4124c948065235aaffbd754'
                        key: {
                            document_key: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            variable: '3499c6631b630010affd0e55cc4bcb90'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '2c4485fd9760dbd45c91b63de053af7f'
                        key: {
                            id: 'e34ed39bf49e4c798818603013ea48c3'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '2c72d0f197689bd45c91b63de053af54'
                        key: {
                            model: 'e472d0f197689bd45c91b63de053af3c'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2cda9bf67cc84572b4d815201609b166'
                        key: {
                            document_key: '9b1bdab7f6584729ae3809d69c2ecf78'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2d2fce483ba5466d8b8f50add6e45de4'
                        key: {
                            id: 'c7d96757741e42359ba3d689bd97f494'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2d383dc1f77945bdb52c0a994c2f29b5'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2d533fd330884a64aad001aca067195e'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'requested_salary'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '2d6e6140921445928cd19fa1b86639d5'
                        key: {
                            model: 'ec9aa9fcab5f48e4894d649302f8b0bf'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2dc65e87b89c4436970f01ee7eaf14d5'
                        key: {
                            document_key: 'd9938bb6667c429c8c967e2ce0c9052f'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2df4e62b02634e03bdee62d12c26b755'
                        key: {
                            sys_security_acl: 'c6beb0160e4d444b8d3914b3914bbafd'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2e27bc65a94e4c76a2a86d7ecefdb511'
                        key: {
                            id: '220401ea2994417aa81b58c360d16ecb'
                            table: 'var__m_sys_hub_flow_input_2b8b42e31b630010affd0e55cc4bcbe9'
                            field: 'message'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2e6b0752b7284e58934c0b046b90675e'
                        key: {
                            document_key: '9b1bdab7f6584729ae3809d69c2ecf78'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2e731f73f16a4de291838a5b32f097c2'
                        key: {
                            document_key: '47efe189ba0a46b79924e3ac053c6022'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2e98aef3211f4ae2ad4878a8289db36e'
                        key: {
                            document_key: '668bb3d7b59d47a790107daefbc48bfa'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ed7ca2f3ae644c983bb38ddda3f39d9'
                        key: {
                            name: 'var__m_sys_hub_flow_output_d04881f1f8fe4ad6bc1cc70c5a70b0e9'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2eef30719760dbd45c91b63de053af73'
                        key: {
                            sys_ui_section: {
                                id: 'eaef30719760dbd45c91b63de053af71'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2eef30719760dbd45c91b63de053af74'
                        key: {
                            sys_ui_section: {
                                id: 'eaef30719760dbd45c91b63de053af71'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'inline_checklist_macro'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2ef9638c7c8b451d974a5d6979a516a6'
                        key: {
                            id: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2efad0cc13654769805755fa22a7ba74'
                        key: {
                            document_key: '95d0138cb1c04c10ae87ed5d790f2663'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2efcdbbaaac84bb48a8192e34befcda0'
                        key: {
                            document_key: '70836464d5914ecc9854df38763f8569'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '2f34c1fd9760dbd45c91b63de053afea'
                        key: {
                            id: '38c633c09a4447c38e752a3f6a2e3c0c'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2f5214b197689bd45c91b63de053afae'
                        key: {
                            document_key: '575214b197689bd45c91b63de053af60'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2fcfd107d586414d831828bcb301acee'
                        key: {
                            document_key: '8c1c00af0e93445fa849f1b40c4271df'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '2fe04399f1e5444aba0407d9eceda23b'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_division'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '300d58d73fcd4c4895028006203357f2'
                        key: {
                            sys_security_acl: 'f8eaee2f9099473f86cbcc2d6fd8e865'
                            sys_user_role: {
                                id: '2b2ddd98bd864e0a8d50f609d55ca7e2'
                                key: {
                                    name: 'x_snc_sas_positi_0.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '306258b197689bd45c91b63de053af7f'
                        key: {
                            name: 'var__m_sys_hub_flow_output_786258b197689bd45c91b63de053af1e'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '310b6623d96744b687b3798d3d65f513'
                        key: {
                            sys_security_acl: 'de50f2a3251f45f79a3b1b42693a7394'
                            sys_user_role: {
                                id: '2b2ddd98bd864e0a8d50f609d55ca7e2'
                                key: {
                                    name: 'x_snc_sas_positi_0.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '31232589517648ee97155f1bf92e947d'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'position_responsibilities'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '31392cacf23b4736a430a0d8f521f235'
                        key: {
                            document_key: 'c159b7d55f304e73a04cfa019fa41e77'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '315cbba7f07142df9ce0c2bc90bda925'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_vacancy_reason'
                            value: 'retirement'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '316b0dec6cc7410e80fcf9f1d4da5e7f'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: '5ac899171b934150db4bba63cc4bcb2b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '319b01fa3ee946a8a37341b0f2b8658f'
                        key: {
                            document_key: '9179ef7f351a48b6a83fa37ba5625a36'
                            variable: 'b27b2b29ff6033008d3f5d9ad53bf164'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '31a6f16f815144b99b51febb5750e9f7'
                        key: {
                            id: '220401ea2994417aa81b58c360d16ecb'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'description'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '320ac743a5fa44e38c4120506adcf3b2'
                        key: {
                            question: '065d38bbf411471f8409bde6642da1aa'
                            value: 'resignation'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3212e59dcf0a4f19a72dcda6f6fe5b77'
                        key: {
                            document_key: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            variable: '3499c6631b630010affd0e55cc4bcb90'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '32abd03c66784918a370bcc3f90bf4c4'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'is_automated'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '32b05e5d6eb8494c96f7044167ccefdf'
                        key: {
                            document_key: '7b02acd66cb947899b84fe455b8b9100'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32ccb6af78ac4ac8a5327e6a48491545'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacated_date'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '32d9092021264ff9afd5b8bb1af886d2'
                        key: {
                            document_key: '9b1bdab7f6584729ae3809d69c2ecf78'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '32ef70719760dbd45c91b63de053af81'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'Task notes'
                            view: {
                                id: '0b28fe81ec8003108bb2d76241880c97'
                                key: {
                                    name: 'workspace'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '32efb0719760dbd45c91b63de053af45'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'NULL'
                            view: {
                                id: '15b4872797be03d05c91b63de053af80'
                                key: {
                                    name: 'licensepermitplaybook'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '33289b1d2f5b4b929b83317cc2014262'
                        key: {
                            document_key: 'aedb3c5625564efa82605ebbd6a9c1c3'
                            variable: '074e5876c7ad5110bfbaf89f51c26087'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '335e7789c4444da09291f6ccdb06b4a0'
                        key: {
                            document_key: 'c7d96757741e42359ba3d689bd97f494'
                            variable: 'c23322e91bbb001094630f28cc4bcbae'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '339c9a3c900b495dad72a2485ac7124d'
                        key: {
                            model: 'a948a95476214fd0819ecf5b97dd2579'
                            element: 'decision'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '33aab68392bc4e99adf6f8db9414f13a'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            value: 'withdrawn'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '33e427c1fa0841fa9a780ff72b87049e'
                        key: {
                            document_key: '12dca8870c744c49b8f5e4b2c5415e94'
                            variable: 'b27b2b29ff6033008d3f5d9ad53bf164'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '348dda3c69104dbaa9974491f93b5acc'
                        key: {
                            document_key: '95d0138cb1c04c10ae87ed5d790f2663'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '34e9b4011a034874bcff18605dba5618'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_request_info_end'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '354ed7f625834317b521b1efb61e1507'
                        key: {
                            document_key: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            variable: '47ceb192777220102a272f589a10616d'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '358aafda8e6e4a07826f8490e03185ab'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'return_reason'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '36538e0c00ec43c383472b7f9224c520'
                        key: {
                            document_key: '12dca8870c744c49b8f5e4b2c5415e94'
                            variable: '6f69fc4aff6433008d3f5d9ad53bf18c'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '366df80401334a2ead8b3c5b0ca892d2'
                        deleted: false
                        key: {
                            table: 'x_snc_sas_positi_0_case'
                            short_description: 'Unbudgeted position required'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '3682143597689bd45c91b63de053afc9'
                        key: {
                            model: 'ba82143597689bd45c91b63de053afc6'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '368a690e1736403b9f909e878955d6e3'
                        key: {
                            document_key: '6abbd42fb24e480fb0483843e59f22b8'
                            variable: '074e5876c7ad5110bfbaf89f51c26087'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '36ae3ec5132b4140abd30c29aa3abb2a'
                        key: {
                            id: '1e653f76d6af457ea00ee1885550e750'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '36ae6ee925c045d186b93742ddb1ff30'
                        key: {
                            sys_ui_form: {
                                id: '7e608a9cb7a941b38efcce7f25217de8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'a0700e8c5c614fb79367e7bb27d8ef11'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Candidate Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36ef70719760dbd45c91b63de053af4c'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36ef70719760dbd45c91b63de053af4d'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36ef70719760dbd45c91b63de053af4e'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36ef70719760dbd45c91b63de053af4f'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'contact'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36ef70719760dbd45c91b63de053af50'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'consumer'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36ef70719760dbd45c91b63de053af51'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36ef70719760dbd45c91b63de053af52'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36ef70719760dbd45c91b63de053af53'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36ef70719760dbd45c91b63de053af54'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'proposed_decision'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36ef70719760dbd45c91b63de053affc'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'beef70719760dbd45c91b63de053aff9'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36efb0719760dbd45c91b63de053af8c'
                        key: {
                            sys_ui_section: {
                                id: '32efb0719760dbd45c91b63de053af45'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '15b4872797be03d05c91b63de053af80'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '373f51aad5f94ac18e78b3c1b55c55c1'
                        key: {
                            sys_security_acl: 'e4a97aaaf5fe453382300525b7f9ec99'
                            sys_user_role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '373f5ce2a9fd435fb14d7db51d2694e5'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_division'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '375c59b40c11495cbf5f718972152b35'
                        key: {
                            document_key: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            variable: 'd803775a5b01001031a67d6f7281c7aa'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '376ca8c340d9471e807e8e0034dfb20f'
                        key: {
                            document_key: '1b60439b08af4362946344db5675d30c'
                            variable: '074e5876c7ad5110bfbaf89f51c26087'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '378b064e379e42638a2ceff7b372a6b4'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_exemption_reason'
                            value: 'title_adjustment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3871362d06134ca9a16e5bc6811b329d'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacancy_reason'
                            value: 'resignation'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '38c633c09a4447c38e752a3f6a2e3c0c'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_duties_end'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '38caae0a70f84ce38c2ad3b360f56e0c'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_fund_src_1'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '38d5299061af4b7e964b7f6196c57f47'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: '1d8b12fe5b61001070e4492c11f91a19'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '39617729665c4f7b9190643106c20bfe'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_date_vacated'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '396322323de244068b331636ba82fd71'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_fund_src_1'
                            value: 'special_revenue'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '39afbbea2e234f4ab55b2afc1e800525'
                        key: {
                            id: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '3a369cf5b6ef479aa3c41839419a09ec'
                        key: {
                            id: '029b6913dbf74698a0f6606c43053d29'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3aea3fb1f9e541c2b6f0385af2d72c6b'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'active'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3b0be8252fb84b9793cfd9d08aba968f'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_just_streamlining'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '3b3405fd9760dbd45c91b63de053af7b'
                        key: {
                            id: '5d432a527cfc450c873d411cbe857f12'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '3b5254b197689bd45c91b63de053afe3'
                        key: {
                            model: 'fb5254b197689bd45c91b63de053afcb'
                            element: 'error'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '3b762869351542c9906a0af87df1061a'
                        key: {
                            model: 'dc6d40bdcccf4dd4b3be966bf8efc32c'
                            element: 'basis'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3bed033ffca5431ab3914e78fd12ae0d'
                        key: {
                            question: '38caae0a70f84ce38c2ad3b360f56e0c'
                            value: 'special_revenue'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '3c02e79a139c49b0b606554b7c719e54'
                        key: {
                            id: '7b02acd66cb947899b84fe455b8b9100'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_sla'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c3e46faeb7f419abd36387825fadee5'
                        key: {
                            name: 'var__m_sys_hub_flow_input_a948a95476214fd0819ecf5b97dd2579'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3c63d0a997a8d7d45c91b63de053af9f'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3c6dff75ec26490c8a96b0d876d92af6'
                        key: {
                            document_key: 'c7d96757741e42359ba3d689bd97f494'
                            variable: '6c9c4ee31b630010affd0e55cc4bcbbf'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3cadcade82fe46618059f67aca6f5722'
                        key: {
                            document_key: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            variable: '1d8b12fe5b61001070e4492c11f91a19'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3d53a34b0ec543b599a93dbd7f290385'
                        key: {
                            sys_ui_section: {
                                id: 'a0700e8c5c614fb79367e7bb27d8ef11'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Candidate Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3d903679269940aaa3044a047f6ae036'
                        key: {
                            sys_ui_section: {
                                id: '5c5795a9d90e4faa95915618d3308b04'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Vacancy Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_vacated_pers_num'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3dbcfac2afc846b69f18d51633d81654'
                        key: {
                            document_key: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3de44b92cda2406f9e33891313b41fc4'
                        key: {
                            sys_ui_section: {
                                id: '77c1ca7b633f41b5afc3eac3b940ab64'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Position Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3e82143597689bd45c91b63de053afe5'
                        key: {
                            name: 'var__m_sys_hub_flow_output_ba82143597689bd45c91b63de053afc6'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3ea34d2483d64b4e897eae6364a8a83b'
                        key: {
                            document_key: 'bf4990c5bc974603ad9d7f8f6d35f983'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3eeeabf9b0894bf69d4406219b3dddff'
                        key: {
                            document_key: '0006de7a35ef4ce89a9123f432c40783'
                            variable: '07a68b3dff812010748653bd6338f153'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3eef70719760dbd45c91b63de053aff6'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'comments'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3eef70719760dbd45c91b63de053aff7'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3eef70719760dbd45c91b63de053aff8'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3f21d5e00a0541b28e13aa969b7a7b9e'
                        key: {
                            document_key: '12dca8870c744c49b8f5e4b2c5415e94'
                            variable: 'ff06ab840f20101091d0f00c97767e6d'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3f2f0e3d76244faab4af083684bff5f7'
                        key: {
                            sys_ui_section: {
                                id: '5c5795a9d90e4faa95915618d3308b04'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Vacancy Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '3f3405fd9760dbd45c91b63de053af7c'
                        key: {
                            id: '5d432a527cfc450c873d411cbe857f12'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '3f467c39b46f462ea3789e893411d409'
                        key: {
                            id: '0006de7a35ef4ce89a9123f432c40783'
                            table: 'var__m_sys_pd_activity_type_prop_dc6459fbff001010393e53bd6338f1cb'
                            field: 'icon'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3f8ddeada2484365921bf10a05060846'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'funding_pct'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '400d6b797cdb45258a42a13350a0147d'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'job_series'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '406294b197689bd45c91b63de053af0f'
                        key: {
                            document_key: 'fb5254b197689bd45c91b63de053afcb'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '406294b197689bd45c91b63de053af16'
                        key: {
                            model: '735254b197689bd45c91b63de053af9d'
                            element: 'director'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '406ee7f4fe904f42b75e727cf02ba9cf'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_hub_flow_input_8ec899171b934150db4bba63cc4bcb22'
                            field: 'table'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '408170a3fa564b9daced0ce9e092d9b5'
                        key: {
                            document_key: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4093706e1f2944e9931bd53eeb2adc15'
                        key: {
                            document_key: 'c159b7d55f304e73a04cfa019fa41e77'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40bc41e1850c4e068eb67b9a0e2fe549'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40c860a2dedc4e4881246bfbe1d5ca82'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'advertising_exempt'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4110b2fdc58c4d86b92cca3f10d88318'
                        key: {
                            document_key: 'dc6d40bdcccf4dd4b3be966bf8efc32c'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '413161ccc55b4f0d8fd4594da9c76d32'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'exemption_justification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '415589b197a0dbd45c91b63de053af5c'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'icon'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '415589b197a0dbd45c91b63de053af5f'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'attachment_source'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '41bc1c80b10e404086eb5533f8af99f3'
                        key: {
                            id: '4115562f58cb41309eaf374d82137410'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '41f98dcbd7c0471cbccc616bc5f685b6'
                        key: {
                            document_key: '26d4e928d1574d8d813f960bbeb6f8f7'
                            variable: 'b27b2b29ff6033008d3f5d9ad53bf164'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '428812d28e2a4f058313156eaa12877d'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_workforce_split'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '43093a5f7b544a4cbe026441d48cd5ee'
                        key: {
                            question: '38caae0a70f84ce38c2ad3b360f56e0c'
                            value: 'cash'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4336881be5d74e979867d68dbf55a717'
                        key: {
                            id: '0006de7a35ef4ce89a9123f432c40783'
                            table: 'var__m_sys_pd_activity_type_prop_dc6459fbff001010393e53bd6338f1cb'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '43c3f94ca8d34681bbd25ece7607794f'
                        key: {
                            sys_security_acl: '098f99a6184f445a80acd850a5730529'
                            sys_user_role: {
                                id: '2b2ddd98bd864e0a8d50f609d55ca7e2'
                                key: {
                                    name: 'x_snc_sas_positi_0.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4436b490281d42248c519a60bc0fa40c'
                        key: {
                            sys_security_acl: 'ba55c593f30b41bfa8073c086f4f1420'
                            sys_user_role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '443bff3a66694b45aef81cc4de8dc0e2'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_candidate_applicable'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '446294b197689bd45c91b63de053af1f'
                        key: {
                            model: '735254b197689bd45c91b63de053af9d'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '446294b197689bd45c91b63de053af3a'
                        key: {
                            name: 'var__m_sys_hub_action_output_735254b197689bd45c91b63de053af9d'
                            element: 'analyst'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '446294b197689bd45c91b63de053af49'
                        key: {
                            model: '735254b197689bd45c91b63de053af9d'
                            element: 'group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '446294b197689bd45c91b63de053af4f'
                        key: {
                            name: 'var__m_sys_hub_action_output_735254b197689bd45c91b63de053af9d'
                            element: 'group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '446fcd5aa3334386b106543372909684'
                        key: {
                            id: '9b1bdab7f6584729ae3809d69c2ecf78'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44df115fb5ff4d9e81256ca8035660b6'
                        key: {
                            name: 'var__m_sys_hub_flow_output_a948a95476214fd0819ecf5b97dd2579'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '44f670f5be5049a78b80f6a667643b08'
                        deleted: false
                        key: {
                            table: 'x_snc_sas_positi_0_case'
                            short_description: 'OPM comments required on denial/more info'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4510dfb4c75e465b988d9cc7ea9451c8'
                        key: {
                            document_key: '26d4e928d1574d8d813f960bbeb6f8f7'
                            variable: '98c44875ffa033008d3f5d9ad53bf1fa'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '45a985fd5618425da3e3c526ca83ed8a'
                        key: {
                            document_key: '7b02acd66cb947899b84fe455b8b9100'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4638c560635d4fe6abf4ca6fea12a6b6'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4658d9a1e406451784e646dbaa9dd70e'
                        key: {
                            id: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '46cc6443d9e249c1843886724fb43947'
                        key: {
                            model: '89eff1961597477c8a476f6e2f451de1'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '474477a3b7864e9d9c3032fd84802a94'
                        key: {
                            model: 'e8e0157adf214dadb61c85e337c1c4de'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '477298f197689bd45c91b63de053afbf'
                        key: {
                            name: 'var__m_sys_hub_flow_output_8f7298f197689bd45c91b63de053af7a'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47a331893a1a45ce8f8846860cf160ab'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'shared_services_series'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '47ebdfc5dec14f6696f747aedafb6041'
                        key: {
                            document_key: 'e60435768b404a0f97553136636a8024'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '481fa11b00344dc5acc70b6767c19922'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'grade'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4851852b19f34b178306d15fb35633f9'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'return_reason'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '485e43d753184428813560d0314e702c'
                        key: {
                            document_key: '1e653f76d6af457ea00ee1885550e750'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '486254b197689bd45c91b63de053afef'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_fb5254b197689bd45c91b63de053afcb'
                            element: 'director'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '486294b197689bd45c91b63de053af10'
                        key: {
                            id: 'fb5254b197689bd45c91b63de053afcb'
                            table: 'var__m_sys_hub_step_ext_input_fb5254b197689bd45c91b63de053afcb'
                            field: 'department_sys_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '486294b197689bd45c91b63de053afae'
                        key: {
                            document_key: '735254b197689bd45c91b63de053af9d'
                            variable: '446294b197689bd45c91b63de053af1f'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48695f6b3c8c4fa69b6320e8d2227452'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '486ed840105647b1928a16fa91c6a5f5'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_certification_start'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '48b92ab3534f443dbe58407943729a9c'
                        key: {
                            document_key: '03107244bcb24eadb35439bc73bd44cf'
                            variable: '7480c46d375403109267bac734924b4c'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '48be93854e4046e583d4bcb18536de71'
                        key: {
                            model: '7eb1d0a3a8f0489c9af271c5b2952fe1'
                            element: 'department_sys_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '48de7749eb6441c6b2e6d6878ffc3c24'
                        key: {
                            name: 'var__m_sys_hub_flow_input_625966fabf1241188c90384112c820a5'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '495549b197a0dbd45c91b63de053af02'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'wait'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '495589b197a0dbd45c91b63de053af60'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '63fd1eeac7e60010bfbaf89f51c26059'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '49585746e91c4effa387f561aa70605f'
                        key: {
                            id: '220401ea2994417aa81b58c360d16ecb'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '497eb91859c54a9b85633d0eba09ed6e'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '49c05fdb8d5c46f6b4120252490f7bac'
                        key: {
                            model: '625966fabf1241188c90384112c820a5'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '49f68ff1bdf84f488ff8a788241473cf'
                        key: {
                            id: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a11de860cbb4d71b99af47be436a1b8'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'grade'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4aab64a5aa1d4c14817de3df832bf094'
                        key: {
                            document_key: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4ab472d7fb5649c2901cc09b0dddaa7d'
                        key: {
                            document_key: '0006de7a35ef4ce89a9123f432c40783'
                            variable: '346499fbff001010393e53bd6338f1eb'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4ab55ce8c97145bebd747eabd25efc4e'
                        key: {
                            document_key: '668bb3d7b59d47a790107daefbc48bfa'
                            variable: '3499c6631b630010affd0e55cc4bcb90'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4b384258b0b04f748509650793c16c19'
                        key: {
                            document_key: '8668824cf52647e48b2074cec54f4a1b'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4b52d0b197689bd45c91b63de053af23'
                        key: {
                            document_key: 'b65290b197689bd45c91b63de053afc8'
                            variable: '8f5290b197689bd45c91b63de053affa'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b5ac5835809490d8e1fc322ddcbc7f1'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'hiring_official'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4b9da9a66d064159be41b6587e9f5a3b'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4c01b102671e4a5f86a072dce209b0ac'
                        key: {
                            document_key: '2dda10504e464176a36a179d6f7d2514'
                            variable: '9c6b7e22c3211010381b60bc0eba8f98'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4c2a2b7c991b49a6a9f2c7bc24f522c2'
                        key: {
                            id: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4c3081717e034734a849418bafdae03c'
                        key: {
                            sys_ui_section: {
                                id: '510fc737ea3b47df92c8a5954755f35e'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Workforce Data'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_authorized_count'
                            position: '1'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '4c4405fd9760dbd45c91b63de053afe5'
                        key: {
                            id: '7cc7d77987b34280ba40f57ef38eb9ef'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '4c4445fd9760dbd45c91b63de053af18'
                        key: {
                            id: '7cc7d77987b34280ba40f57ef38eb9ef'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c6254b197689bd45c91b63de053aff6'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_fb5254b197689bd45c91b63de053afcb'
                            element: 'group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4c6294b197689bd45c91b63de053afad'
                        key: {
                            id: '735254b197689bd45c91b63de053af9d'
                            table: 'var__m_sys_hub_action_output_735254b197689bd45c91b63de053af9d'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4d41f1fe49834d4791ec5dee5e1f8f0f'
                        key: {
                            document_key: '1b60439b08af4362946344db5675d30c'
                            variable: '0f4e18f6c7ad5110bfbaf89f51c260f0'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4d5589b197a0dbd45c91b63de053af5c'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'attachments_read_only'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4d8f463c45a24fcfa5b0227a1fcae0d4'
                        key: {
                            document_key: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4e13dce050c74006951f5890495ebc25'
                        key: {
                            id: '8668824cf52647e48b2074cec54f4a1b'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '4e82d03597689bd45c91b63de053af5b'
                        key: {
                            model: '8a82d03597689bd45c91b63de053af2a'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4e9f1d0fc84141b19c443a1a2b68e508'
                        key: {
                            document_key: '668bb3d7b59d47a790107daefbc48bfa'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f25b71bad6543bcac958e5a24441522'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'turnover_rate_pct'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f34c897acf542a1b2f8b32b6cede4bf'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_fund_src_2'
                            value: 'federal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4f38326dc95e407dbadc1345ab379103'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_request_date'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4f52d0b197689bd45c91b63de053af22'
                        key: {
                            id: 'b65290b197689bd45c91b63de053afc8'
                            table: 'var__m_sys_hub_action_output_b65290b197689bd45c91b63de053afc8'
                            field: 'meeting_date'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '4f7298f197689bd45c91b63de053afaa'
                        key: {
                            model: '8f7298f197689bd45c91b63de053af7a'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5008e3aa3917460daf877bf6e2839db2'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: '6f2f7ecf5b21001070e4492c11f91a77'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '504485fd9760dbd45c91b63de053af1e'
                        key: {
                            id: 'c4deee93a59b4c03a104ab51fa939f00'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '50afaf511fea48f8b5768c2617eb5f81'
                        key: {
                            document_key: '4115562f58cb41309eaf374d82137410'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5107ad9038694577933f4c6b5da02a2b'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'org_chart'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '51097fcc69da4f8e9366fc1f68a91553'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'personnel_action'
                            value: 'promotion'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '510fc737ea3b47df92c8a5954755f35e'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            caption: 'Workforce Data'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '51718c8b996848aaadfa6fa7d7268a04'
                        key: {
                            document_key: '9179ef7f351a48b6a83fa37ba5625a36'
                            variable: '6f69fc4aff6433008d3f5d9ad53bf18c'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '5182503597689bd45c91b63de053af7f'
                        key: {
                            model: '1d82503597689bd45c91b63de053af67'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '51ab8642ab9c4c46acda86a28f709adb'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            value: 'decision_issued'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '5245945c8c6f4fe1a6edcfe1db943d28'
                        key: {
                            model: 'fed85ed115a54408852597482a71c3aa'
                            element: 'analyst'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '52a6eb4ef35b44a0bc3e11824bb4811d'
                        key: {
                            document_key: '029b6913dbf74698a0f6606c43053d29'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '530215a421314c64837cf4895b97eef6'
                        key: {
                            id: 'c7d96757741e42359ba3d689bd97f494'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5311068d6fee456f92361a5449a6ef6f'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'director_approver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '5334c1fd9760dbd45c91b63de053af5f'
                        key: {
                            id: '065d38bbf411471f8409bde6642da1aa'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '5334c1fd9760dbd45c91b63de053af6f'
                        key: {
                            id: '0d1f65408fb64ce897a5437b17649f9f'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '535214b197689bd45c91b63de053af67'
                        key: {
                            model: '575214b197689bd45c91b63de053af60'
                            element: 'case_sys_id'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '53c3e217cbc548a785a4d9b7eeb8f4a4'
                        key: {
                            id: '2d362e4001784e2a847b6d64fac16074'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '53d112e1f3dd44e4a33540795d03d6e4'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53d1b921e3034da18b265a62461d4ea3'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_description'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '53df32d72a1e4ea0acbcd920a3838b54'
                        key: {
                            id: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '53e5a6afc16945aa9fb00b98503d4267'
                        key: {
                            id: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '53f4d3225cee457ca28c24a4155a231d'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            value: 'requisition_pending'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '53f63b8b0483494d92065ec427a4f5a6'
                        key: {
                            name: 'var__m_sys_hub_flow_output_7370b74da3334152a795ea48d819b8e8'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '53f932e072044d7a8cd8da6647006e1c'
                        key: {
                            id: '1e653f76d6af457ea00ee1885550e750'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5418f6e425e8498986667347ecdc4630'
                        key: {
                            document_key: '2d362e4001784e2a847b6d64fac16074'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '542087c111c14ec593274db302bf8c27'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'parent_case'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '5422545a634e4104ba7e552e0c111749'
                        key: {
                            question: '065d38bbf411471f8409bde6642da1aa'
                            value: 'promotion'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '542d578a26f9423a9ea6fc3d07d36212'
                        key: {
                            model: 'f33477e70d09408ca4110f327692afb8'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '543aad716f4b4f4bbae39e8626b86ab7'
                        key: {
                            document_key: '220401ea2994417aa81b58c360d16ecb'
                            variable: '24bdf44673030010fe4a6da44cf6a707'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '544485fd9760dbd45c91b63de053af1f'
                        key: {
                            id: 'c4deee93a59b4c03a104ab51fa939f00'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '544485fd9760dbd45c91b63de053af2f'
                        key: {
                            id: 'dece88a9774348508e390ade5a72a7bd'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54de4a1e0e604efb9fef41dd14427067'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'minimum_qualifications'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5553733cbc224c9081c531f7f9d85f60'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '5562c3d2c1c94502a2e4b1654af19faf'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_certification_end'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5569494b64624625870691b660b8fdad'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_basis'
                            value: 'both'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5569bb0f38b74d2da2efc1215874578c'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_business_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '556c95642bac1f90b7b1f93a5e91bf44'
                        key: {
                            sys_ui_section: {
                                id: '035c916497a45f945c91b63de053af72'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes_list'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '557e44c4259d47fa9d32ecadad86dbca'
                        key: {
                            id: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '55e819e8198b4c3b8397b8ab995b66c3'
                        key: {
                            name: 'var__m_sys_hub_flow_input_93158c9efb474c7bb780c1a1bebcb007'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '5600f5a9cecb4e28b6403e5370c27eff'
                        key: {
                            question: '38caae0a70f84ce38c2ad3b360f56e0c'
                            value: 'federal'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '560cb2e1d27143f8b4cb7ac66fc8f56f'
                        key: {
                            id: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'row_count'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '562141bda5a04b229dd2420a0ec05926'
                        deleted: false
                        key: {
                            table: 'x_snc_sas_positi_0_case'
                            short_description: 'Candidate section'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '563cf1ad6eb6436295ab3a195c48cf6b'
                        key: {
                            document_key: 'c1335788ee1d47d3bd24819320827b89'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '56798b85de544f21b03518fdbbb1021a'
                        key: {
                            id: 'c7d96757741e42359ba3d689bd97f494'
                            table: 'var__m_sys_hub_flow_input_2b8b42e31b630010affd0e55cc4bcbe9'
                            field: 'wait'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '56960478d0c84d1893ddaf867b06d7c8'
                        key: {
                            id: 'c7d96757741e42359ba3d689bd97f494'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '56bdf7ee9ad94edeb8a579e5ac088246'
                        key: {
                            document_key: '1e653f76d6af457ea00ee1885550e750'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '56effc319760dbd45c91b63de053af27'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'Task'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '56effc319760dbd45c91b63de053af4b'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '56effc319760dbd45c91b63de053af4c'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'contact'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '56effc319760dbd45c91b63de053af4d'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'proposed_decision'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '56effc319760dbd45c91b63de053af4e'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '56effc319760dbd45c91b63de053af4f'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '56f0f3239af541f391ffc7c926c3a21c'
                        key: {
                            document_key: '8668824cf52647e48b2074cec54f4a1b'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '5734c1fd9760dbd45c91b63de053af70'
                        key: {
                            id: '0d1f65408fb64ce897a5437b17649f9f'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5751811389ee4bc7a0abd44c6be02b8b'
                        key: {
                            id: '220401ea2994417aa81b58c360d16ecb'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '57679f3af5474396bd9e26febe1ff121'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_position_number'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '57687ec2a7614c438b7c4393b74718f2'
                        key: {
                            document_key: '56cde3c4e8d04b178e2ef2029f16bd71'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '57b7467b0b0e4d2d9352507711e85b46'
                        key: {
                            id: '8668824cf52647e48b2074cec54f4a1b'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assigned_to'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '584445fd9760dbd45c91b63de053afec'
                        key: {
                            id: 'b700e7422410424a8228acef2d00211d'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '584485fd9760dbd45c91b63de053af30'
                        key: {
                            id: 'dece88a9774348508e390ade5a72a7bd'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '58955292b17c41a298b3ec8d7c43504f'
                        key: {
                            id: '8668824cf52647e48b2074cec54f4a1b'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '58b101809dbf4990992ab0f66ac69a84'
                        key: {
                            id: '02962e9bd4374c4c84b7b9fe6dd3afd3'
                            table: 'var__m_atf_input_variable_071ee5b253331200040729cac2dc348d'
                            field: 'user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58b950d2fa5b4672b848c8b4a23c0052'
                        key: {
                            name: 'var__m_sys_hub_flow_input_4e9c593b813d43faae56cda8f14cedc9'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '591cf87229a74dbc87e3ef43a3079df6'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'candidate_current_salary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '59435cc7e690468bb7e458cb026c2ca5'
                        key: {
                            sys_ui_section: {
                                id: '1e645db421b84e01bff3ac57ded4bede'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Funding'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_fund_pct_1'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '595491c970c44e23a784f98d694a6518'
                        key: {
                            name: 'var__m_sys_hub_flow_input_a948a95476214fd0819ecf5b97dd2579'
                            element: 'decision'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5962d8b197689bd45c91b63de053af7a'
                        key: {
                            name: 'var__m_sys_hub_flow_input_1962d8b197689bd45c91b63de053af54'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '59bc42c207d646a4b510fa76ffdf2033'
                        key: {
                            model: 'ace0bfa0c29c46d2831f2d3af2e375cf'
                            element: 'activity_name'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '59d4a709ac0d48349ff508f9ccd63696'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_req_number'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '5a7218f197689bd45c91b63de053af97'
                        key: {
                            model: 'de7218f197689bd45c91b63de053af94'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '5ac39754f9124e508590208c24a50dd6'
                        key: {
                            model: 'fed85ed115a54408852597482a71c3aa'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '5aeffc319760dbd45c91b63de053af9f'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'NULL'
                            view: {
                                id: '739763c0a3d50210974f00dfe51e611d'
                                key: {
                                    name: 'conductInterview'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '5af862a07d7d41a89446ce4cc230365d'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_responsibilities'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '5b34c1fd9760dbd45c91b63de053af4c'
                        key: {
                            id: '05f9cceb083b44e289994ed06672e35c'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5b358e0429c54c199ebb2aec3342ac47'
                        key: {
                            name: 'service_offering'
                            element: 'x_snc_sas_positi_0_u_annual_run_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '5b4d8b3b886e45da92c9746a7914fbfe'
                        key: {
                            model: '1a7528b183e94354955dc352b9973adc'
                            element: 'date_time'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5b5cc3b87208420e8d52ea64eaf2ed7d'
                        key: {
                            document_key: '4115562f58cb41309eaf374d82137410'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b6e5ac45997406cba46cf5a28d05dc7'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'candidate_current_salary'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5b6eb532d3914f39810442f69ffff4ca'
                        key: {
                            id: 'e60435768b404a0f97553136636a8024'
                            table: 'var__m_atf_input_variable_14872288df60220062fe6c7a4df26319'
                            field: 'field_values'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5bc2a68cc32742869aeb256dd226dbfb'
                        key: {
                            sys_security_acl: '6482254b7bc14477b2510a15779068b2'
                            sys_user_role: {
                                id: '2b2ddd98bd864e0a8d50f609d55ca7e2'
                                key: {
                                    name: 'x_snc_sas_positi_0.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5c056e5382df4964aa16c71c5e7de941'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'at_or_over_position_cap'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5c271717569942039a83416a166c766d'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'committee_decision'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '5c5795a9d90e4faa95915618d3308b04'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            caption: 'Vacancy Information'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '5c8142bff4d64878942f3a481be61d75'
                        key: {
                            model: '7eb1d0a3a8f0489c9af271c5b2952fe1'
                            element: 'analyst'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5cc4e86395fa401e87962a96136fe0eb'
                        key: {
                            document_key: 'c7d96757741e42359ba3d689bd97f494'
                            variable: '9c6b7e22c3211010381b60bc0eba8f98'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5cd44845e46241d0b57dd1d3df80741a'
                        key: {
                            document_key: '668bb3d7b59d47a790107daefbc48bfa'
                            variable: 'd803775a5b01001031a67d6f7281c7aa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5d036f062998456b89e1044e37d951f5'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            value: 'intake'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5d152c97c2c447c992765deeed5bc40c'
                        key: {
                            id: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'max_columns'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5d153fd377e64f2b8fd05c74fa7af2fb'
                        key: {
                            document_key: '7b02acd66cb947899b84fe455b8b9100'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '5d432a527cfc450c873d411cbe857f12'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_justification_start'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5dd1d0f66c274143af1d796a35ac750f'
                        key: {
                            id: '7b02acd66cb947899b84fe455b8b9100'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_checklist'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5df4953b09a24e689359dd3826845639'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'personnel_action'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5e5ff680c2d0415ca27bb4f32a69b23e'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_committee_decision'
                            value: 'more_info'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5e640b1daa4243b3a2fc5149970f931a'
                        key: {
                            id: '09f943cf48f846b299d9f1d9cfa65a45'
                            table: 'var__m_atf_input_variable_1f39a288df60220062fe6c7a4df2639d'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e7218f197689bd45c91b63de053afbb'
                        key: {
                            name: 'var__m_sys_hub_flow_input_de7218f197689bd45c91b63de053af94'
                            element: 'activity_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5e8dc7935b224b94a4cdbd8419f6b39f'
                        key: {
                            document_key: '9b1bdab7f6584729ae3809d69c2ecf78'
                            variable: '4f9fdae51bbb001094630f28cc4bcb66'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5e9e74a5f9cc4f30ab1deb7a4ba53ac3'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5ebd60f78019458c9b21b3ef52d78314'
                        key: {
                            document_key: '0006de7a35ef4ce89a9123f432c40783'
                            variable: '986499fbff001010393e53bd6338f13d'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5ecd49becb4f4d3d96d7da82f9e3c0f0'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_budget_status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5eefbc319760dbd45c91b63de053af34'
                        key: {
                            sys_ui_section: {
                                id: '1eefbc319760dbd45c91b63de053af32'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5eefbc319760dbd45c91b63de053af35'
                        key: {
                            sys_ui_section: {
                                id: '1eefbc319760dbd45c91b63de053af32'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes_list'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5eefbc319760dbd45c91b63de053af36'
                        key: {
                            sys_ui_section: {
                                id: '1eefbc319760dbd45c91b63de053af32'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5eefbc319760dbd45c91b63de053af37'
                        key: {
                            sys_ui_section: {
                                id: '1eefbc319760dbd45c91b63de053af32'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5eefbc319760dbd45c91b63de053af38'
                        key: {
                            sys_ui_section: {
                                id: '1eefbc319760dbd45c91b63de053af32'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5f092d929dc146b79c7ab95d421810d1'
                        key: {
                            id: '9b1bdab7f6584729ae3809d69c2ecf78'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '5f34c1fd9760dbd45c91b63de053af4d'
                        key: {
                            id: '05f9cceb083b44e289994ed06672e35c'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '5f34c1fd9760dbd45c91b63de053af5d'
                        key: {
                            id: '065d38bbf411471f8409bde6642da1aa'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '5f4a10f8c6bd4b459716ba057151c304'
                        key: {
                            name: 'x_snc_sas_positi_0_job_req'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5f7ca773e2a64697aaa33d6484f66991'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'director_certified_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5f80cd3ed297478b969dd69c8bc6641b'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_fund_src_2'
                            value: 'general_revenue'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5f97d6d525384a6fabdaec2bc4a4e78b'
                        key: {
                            id: '8668824cf52647e48b2074cec54f4a1b'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5f9b66ef965d4203958f638f60ddb2d6'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'personnel_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5fbb72356d9c49bb9deaae725d9ee6b5'
                        key: {
                            id: '668bb3d7b59d47a790107daefbc48bfa'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '604485fd9760dbd45c91b63de053af52'
                        key: {
                            id: 'df4d2bb1bee34828b45fd9236ef909da'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '604485fd9760dbd45c91b63de053af62'
                        key: {
                            id: 'e0b40dc4700d497b912c07d430c7bed6'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '604485fd9760dbd45c91b63de053af96'
                        key: {
                            id: 'f003b637323e41cf93e748069646804e'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6065ade027704c798f33a44c955be446'
                        key: {
                            document_key: 'e8377d200cc644ca9d70456937e1375f'
                            variable: '4cf4ffc9732741d8971f6ea32d457a90'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '6072d0f197689bd45c91b63de053af3f'
                        key: {
                            model: 'e472d0f197689bd45c91b63de053af3c'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '60d59efe43b44e178d1174fda99c3293'
                        key: {
                            sys_ui_section: {
                                id: '510fc737ea3b47df92c8a5954755f35e'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Workforce Data'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_filled_count'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '60dd43cda8de4aa68481ca066291d6c8'
                        key: {
                            document_key: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            variable: 'd803775a5b01001031a67d6f7281c7aa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '60e2fb5947a74979a665e0295182df83'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_committee_decision'
                            value: 'denied'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '616f847301ad4a5ea6d4034ab33e2c4b'
                        key: {
                            document_key: '029b6913dbf74698a0f6606c43053d29'
                            variable: '54c49bc60f3200102920c912d4767ee2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '617294f197689bd45c91b63de053afff'
                        key: {
                            name: 'var__m_sys_hub_flow_output_a97294f197689bd45c91b63de053afb8'
                            element: 'basis'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '619ddcb0fcc441d4b59a1890256d95e6'
                        key: {
                            document_key: '2dda10504e464176a36a179d6f7d2514'
                            variable: '6c9c4ee31b630010affd0e55cc4bcbbf'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '61fcbacd390e41199632e04dee48fd55'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'requesting_department'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '621c1f805f7841c59fae551121f5d6e7'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'additional_info_response'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '62296bb2af7649bbb890e6336c47683d'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: '29255db25b21001070e4492c11f91ac5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '622cd27facea4de2927936a775baa813'
                        key: {
                            document_key: '029b6913dbf74698a0f6606c43053d29'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '625250b197689bd45c91b63de053afc1'
                        key: {
                            name: 'var__m_sys_hub_action_output_6e5250b197689bd45c91b63de053af62'
                            element: 'date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '62dce2c026e641aa94283874f8920c20'
                        key: {
                            question: '01e81f707d8c4533be5301e34128ace7'
                            value: 'general_revenue'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '630a35f0a1eb4a74b8fcf07f3233f0e9'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_exemption_reason'
                            value: 'governor_authorized'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6318ec9e7dfd4cc88a5fb94eb84ad275'
                        key: {
                            id: '2dda10504e464176a36a179d6f7d2514'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '633405fd9760dbd45c91b63de053af11'
                        key: {
                            id: '3b0be8252fb84b9793cfd9d08aba968f'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '6334c1fd9760dbd45c91b63de053afbd'
                        key: {
                            id: '2076fad19bf247aeb4c780c8de1f22e7'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '6334c1fd9760dbd45c91b63de053afcd'
                        key: {
                            id: '2fe04399f1e5444aba0407d9eceda23b'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '635214b197689bd45c91b63de053afff'
                        key: {
                            name: 'var__m_sys_hub_action_output_1f5214b197689bd45c91b63de053af0b'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '63a97ff34a3e4ff79227118212188aab'
                        key: {
                            model: 'f33477e70d09408ca4110f327692afb8'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '63f3ae5cf8e247218ba16eac25b54e12'
                        key: {
                            question: '065d38bbf411471f8409bde6642da1aa'
                            value: 'termination'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '644485fd9760dbd45c91b63de053af63'
                        key: {
                            id: 'e0b40dc4700d497b912c07d430c7bed6'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '64499764acb548f3a9abb27ed675af25'
                        key: {
                            document_key: '47efe189ba0a46b79924e3ac053c6022'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '64a2f8d510234b67904e0450c1b36fb9'
                        key: {
                            model: '4e1251c2235d4d28b28f86c4b58deab5'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '64c8037f3e9743d0b80439aea20373ac'
                        key: {
                            name: 'var__m_sys_hub_flow_input_874e7068fbfd434e9fe0a72f3cb7ff0a'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '64ce0d8ab31740398f6f091cf5a4abb7'
                        key: {
                            document_key: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '64e14590f6b043528bc9affc6e8ad921'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'return_reason'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '64ed444a616d40bab2155f5d6b6872c9'
                        key: {
                            name: 'var__m_sys_hub_flow_input_d04881f1f8fe4ad6bc1cc70c5a70b0e9'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '64ffee7199f447b4842c31342f028f0f'
                        key: {
                            model: '7eb1d0a3a8f0489c9af271c5b2952fe1'
                            element: 'group'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '65118879885a4880aa75574a6bac5c2c'
                        key: {
                            id: '4115562f58cb41309eaf374d82137410'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6526e019bff84464b000ffd8f186a390'
                        key: {
                            document_key: '9b1bdab7f6584729ae3809d69c2ecf78'
                            variable: '54c49bc60f3200102920c912d4767ee2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '655de45ec5a14bf1aedb2edadde5d93f'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'additional_info_response'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '655f3e3618e44f289c61e72875486895'
                        key: {
                            document_key: '4115562f58cb41309eaf374d82137410'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '656354a997a8d7d45c91b63de053af7d'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '657294f197689bd45c91b63de053afd6'
                        key: {
                            name: 'var__m_sys_hub_flow_input_a97294f197689bd45c91b63de053afb8'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '661151f90f9241f3a058f2b03d245c79'
                        key: {
                            document_key: '2dda10504e464176a36a179d6f7d2514'
                            variable: '49ed24875b00001070e4492c11f91aa5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '664bfc8a62a644c6a3aee6b976586be2'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: '47ceb192777220102a272f589a10616d'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '66709580000a4ec29bb4f164b1f43c65'
                        key: {
                            document_key: '26d4e928d1574d8d813f960bbeb6f8f7'
                            variable: '1985e0ceff2433008d3f5d9ad53bf1ba'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '66769aca2a81482680947de388e85021'
                        key: {
                            document_key: '9b1bdab7f6584729ae3809d69c2ecf78'
                            variable: 'd803775a5b01001031a67d6f7281c7aa'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '66ac84752b645bd0b7b1f93a5e91bf32'
                        key: {
                            model: 'e6ac84752b645bd0b7b1f93a5e91bf2d'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66ac84752b645bd0b7b1f93a5e91bf57'
                        key: {
                            name: 'var__m_sys_hub_flow_input_e6ac84752b645bd0b7b1f93a5e91bf2d'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '66bad4eb6a0b4ff588bdd4c819d3b62f'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_just_unfilled_impact'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '66e514fcc75043f394d13ea31f50e21d'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: 'ca4591f25b21001070e4492c11f91a01'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '66f229997a7a49bcb4648261e6bdb7c1'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_funding_start'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '66f68cea1cf44ae298f5db1e20865993'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'state'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '673405fd9760dbd45c91b63de053af12'
                        key: {
                            id: '3b0be8252fb84b9793cfd9d08aba968f'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '6734c1fd9760dbd45c91b63de053afce'
                        key: {
                            id: '2fe04399f1e5444aba0407d9eceda23b'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '673ce463a59745c0956d1a6948552aba'
                        key: {
                            id: '9b1bdab7f6584729ae3809d69c2ecf78'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_sla'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '67466c27963b42ba81cd8c6785cdd7ee'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_funding_split'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '679e963027fa4a9d8db8b7144de972fe'
                        key: {
                            id: '220401ea2994417aa81b58c360d16ecb'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'title'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '67d4dd354d874aecaa9c4b3093be465b'
                        key: {
                            question: '065d38bbf411471f8409bde6642da1aa'
                            value: 'new_position'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '680d479af34b4c17825526759cee8ba9'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'requesting_department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '684939d0eddc472286c7317e124a7b05'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'class_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '68633bc62fda434f80a0de7e89975935'
                        key: {
                            name: 'service_offering'
                            element: 'x_snc_sas_positi_0_u_annual_run_cost'
                        }
                    },
                    {
                        table: 'sys_pd_process_input'
                        id: '68ae353cbe8441d0bf0d89c701dbb029'
                        key: {
                            element: 'parent_record'
                            model: '6cffbae2a011462eb254c4014da4d7ce'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6995a7e4ae774c089a776b91a4110b49'
                        key: {
                            id: 'c7d96757741e42359ba3d689bd97f494'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'is_automated'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '69c60a046c4c4a839af2958ea2a2d42d'
                        deleted: false
                        key: {
                            ui_policy: '562141bda5a04b229dd2420a0ec05926'
                            field: 'u_current_grade'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '69ce9c9410064e818d4c7041daf164ed'
                        key: {
                            document_key: '473a7ba95d224dd585a0102ab64a7423'
                            variable: 'ff06ab840f20101091d0f00c97767e6d'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '6a5250b197689bd45c91b63de053afb9'
                        key: {
                            model: '6e5250b197689bd45c91b63de053af62'
                            element: 'date_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6a7dcaec98db4a37ae7fffd8142f366c'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_basis'
                            value: 'hiring_freeze'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6ad132ade590480989ecb0c3b3b46dec'
                        key: {
                            document_key: '2d362e4001784e2a847b6d64fac16074'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '6aef30719760dbd45c91b63de053af03'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'Task'
                            view: {
                                id: 'd9a85e2493f08310d6b527dbd7373cf8'
                                key: {
                                    name: 'case'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '6aef30719760dbd45c91b63de053af5a'
                        key: {
                            sys_ui_form: {
                                id: '26effc319760dbd45c91b63de053affe'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'a6ef30719760dbd45c91b63de053af3f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6aef30719760dbd45c91b63de053af98'
                        key: {
                            sys_ui_section: {
                                id: '2aef30719760dbd45c91b63de053af96'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6aef30719760dbd45c91b63de053af99'
                        key: {
                            sys_ui_section: {
                                id: '2aef30719760dbd45c91b63de053af96'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6af9537e8769454c9bc9cc89823b7bbe'
                        key: {
                            sys_ui_section: {
                                id: '77c1ca7b633f41b5afc3eac3b940ab64'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Position Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6b02a755f7f649eb8758935551b3c9ae'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'budget_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b0fbd0ad2464ac0beb6ff98b7aa0231'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'submitted_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6b8aa81937f84a53ac22563ee12514d2'
                        key: {
                            id: '2d362e4001784e2a847b6d64fac16074'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6b8af604cc86466fbdb737dbd7584cce'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6ba0b49c05b34bd08b38c2b0245c3730'
                        key: {
                            name: 'var__m_sys_hub_flow_input_ace0bfa0c29c46d2831f2d3af2e375cf'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6bfa2fd9173c45f59c0a0fe820f091cd'
                        key: {
                            sys_ui_section: {
                                id: '1e645db421b84e01bff3ac57ded4bede'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Funding'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_fund_src_2'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6bfd5961552d4858a74f8e4854155610'
                        key: {
                            id: '7b02acd66cb947899b84fe455b8b9100'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6c23b9f2fddd4addb53d03a25f4e8e38'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'committee_decision'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '6c4485fd9760dbd45c91b63de053af50'
                        key: {
                            id: 'df4d2bb1bee34828b45fd9236ef909da'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '6c4485fd9760dbd45c91b63de053af94'
                        key: {
                            id: 'f003b637323e41cf93e748069646804e'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6c72d0f197689bd45c91b63de053af5c'
                        key: {
                            name: 'var__m_sys_hub_flow_output_e472d0f197689bd45c91b63de053af3c'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6d54df4e193948d484e03e1bfb07f7c8'
                        key: {
                            id: '1e653f76d6af457ea00ee1885550e750'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6d6cd16497a45f945c91b63de053af5f'
                        key: {
                            sys_ui_section: {
                                id: '035c916497a45f945c91b63de053af72'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6e0e587295424bfaa8a1f1905cff50a2'
                        key: {
                            document_key: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6e1ac0bfc1a34b7d992ed6aadd916bfa'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'candidate_current_grade'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '6e39fb1dc8f44d18b38268c7c266f1de'
                        key: {
                            sys_ui_form: {
                                id: '7e608a9cb7a941b38efcce7f25217de8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '6e5250b197689bd45c91b63de053af91'
                        key: {
                            model: 'a65250b197689bd45c91b63de053af70'
                            element: 'date_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e5250b197689bd45c91b63de053afa6'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_a65250b197689bd45c91b63de053af70'
                            element: 'date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6eb1cd2e70ac4701bab4b86550ff8dac'
                        key: {
                            document_key: 'e60435768b404a0f97553136636a8024'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6eb1fb15f63347158a36cba57fcc57d0'
                        key: {
                            document_key: '807b0634bd944d69951e9fe1cf3f2e81'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f1951fd07f546c2acc407a061144c18'
                        key: {
                            name: 'var__m_sys_hub_action_output_f33477e70d09408ca4110f327692afb8'
                            element: 'error'
                            language: 'en'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '6f34c1fd9760dbd45c91b63de053afbb'
                        key: {
                            id: '2076fad19bf247aeb4c780c8de1f22e7'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6f5254b197689bd45c91b63de053af14'
                        key: {
                            id: '1f5214b197689bd45c91b63de053af0b'
                            table: 'var__m_sys_hub_action_output_1f5214b197689bd45c91b63de053af0b'
                            field: 'error'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6f5e915aec6a4ccb930d518b2c038789'
                        key: {
                            id: 'c7d96757741e42359ba3d689bd97f494'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6f64e7c14567420c88c8f976b3f446f8'
                        key: {
                            sys_security_acl: 'b843afcd2cb14fe5b934513c9ed2a648'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6f85e1918f3a422c8d16c36575ffb56a'
                        key: {
                            document_key: 'e6728198f65942229535b889f83873b0'
                            variable: 'ff06ab840f20101091d0f00c97767e6d'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6fc12773c3714c13a15f0c9a06caf559'
                        key: {
                            sys_ui_section: {
                                id: 'dc56d3e529734e42a9852ea20a574160'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Justification'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_just_unfilled_impact'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '70375ace20454dfabb7c4cbce3314855'
                        key: {
                            id: '7b02acd66cb947899b84fe455b8b9100'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '704485fd9760dbd45c91b63de053afa6'
                        key: {
                            id: 'fda8123266e244db8f917bded93d2382'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '706258b197689bd45c91b63de053af62'
                        key: {
                            name: 'var__m_sys_hub_flow_input_786258b197689bd45c91b63de053af1e'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '70745dca2b681fd0b7b1f93a5e91bfa8'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '024026291bbb001094630f28cc4bcb03'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '70c2d7b466b14e08a3257594f68654b2'
                        key: {
                            document_key: '9179ef7f351a48b6a83fa37ba5625a36'
                            variable: 'ff06ab840f20101091d0f00c97767e6d'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '71120d1aaf4748e68b3e4c04eb2b8c70'
                        key: {
                            id: '2d362e4001784e2a847b6d64fac16074'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_checklist'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '713162f87a2346208a41a2ac9800889d'
                        key: {
                            document_key: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            variable: '54c49bc60f3200102920c912d4767ee2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '71ed914e2ffd4610a44388dabe57fcff'
                        key: {
                            id: '220401ea2994417aa81b58c360d16ecb'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'is_automated'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72336d7ffb1e446da5f79f12f0368eb2'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'committee_meeting_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7249df3da20e49beb4e8dd528f1025e4'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'budget_status'
                            value: 'budgeted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '724c633dd99a4c37a538f290e36cdba8'
                        key: {
                            id: '1e653f76d6af457ea00ee1885550e750'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_checklist'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '729b654179bf496d8ef1dccb5ec759b6'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'opm_comments'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '72ef70719760dbd45c91b63de053af83'
                        key: {
                            sys_ui_section: {
                                id: 'feef70719760dbd45c91b63de053af88'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task notes'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes_list'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '72ef70719760dbd45c91b63de053af84'
                        key: {
                            sys_ui_section: {
                                id: 'feef70719760dbd45c91b63de053af88'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task notes'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'comments'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '72ef70719760dbd45c91b63de053af85'
                        key: {
                            sys_ui_section: {
                                id: 'feef70719760dbd45c91b63de053af88'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task notes'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '72ef70719760dbd45c91b63de053af92'
                        key: {
                            sys_ui_form: {
                                id: '26ef30719760dbd45c91b63de053afbf'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'feef70719760dbd45c91b63de053af88'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task notes'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '72ef70719760dbd45c91b63de053afd4'
                        key: {
                            sys_ui_form: {
                                id: '76ef70719760dbd45c91b63de053afb0'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'baef70719760dbd45c91b63de053afb5'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'sn_gsm_government_service_task'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '72efb0719760dbd45c91b63de053af47'
                        key: {
                            sys_ui_section: {
                                id: '32efb0719760dbd45c91b63de053af45'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '15b4872797be03d05c91b63de053af80'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '72efb0719760dbd45c91b63de053af48'
                        key: {
                            sys_ui_section: {
                                id: '32efb0719760dbd45c91b63de053af45'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '15b4872797be03d05c91b63de053af80'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '72efb0719760dbd45c91b63de053af49'
                        key: {
                            sys_ui_section: {
                                id: '32efb0719760dbd45c91b63de053af45'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '15b4872797be03d05c91b63de053af80'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '72efb0719760dbd45c91b63de053af4a'
                        key: {
                            sys_ui_section: {
                                id: '32efb0719760dbd45c91b63de053af45'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '15b4872797be03d05c91b63de053af80'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '72efb0719760dbd45c91b63de053af4b'
                        key: {
                            sys_ui_section: {
                                id: '32efb0719760dbd45c91b63de053af45'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '15b4872797be03d05c91b63de053af80'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assignment_group'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '72efb0719760dbd45c91b63de053af4c'
                        key: {
                            sys_ui_section: {
                                id: '32efb0719760dbd45c91b63de053af45'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '15b4872797be03d05c91b63de053af80'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '72efb0719760dbd45c91b63de053af4d'
                        key: {
                            sys_ui_section: {
                                id: '32efb0719760dbd45c91b63de053af45'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '15b4872797be03d05c91b63de053af80'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'proposed_decision'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '72fffd88dd934042a378c6c39c8beaeb'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'at_or_over_position_cap'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '733405fd9760dbd45c91b63de053af45'
                        key: {
                            id: '486ed840105647b1928a16fa91c6a5f5'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '733405fd9760dbd45c91b63de053af55'
                        key: {
                            id: '57679f3af5474396bd9e26febe1ff121'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '733405fd9760dbd45c91b63de053af5f'
                        key: {
                            id: '59d4a709ac0d48349ff508f9ccd63696'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '733405fd9760dbd45c91b63de053afa3'
                        key: {
                            id: '67466c27963b42ba81cd8c6785cdd7ee'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '735254b197689bd45c91b63de053afa9'
                        key: {
                            name: 'var__m_sys_hub_action_input_735254b197689bd45c91b63de053af9d'
                            element: 'department_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '735254b197689bd45c91b63de053afe1'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_fb5254b197689bd45c91b63de053afcb'
                            element: 'analyst'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73721cf197689bd45c91b63de053afc6'
                        key: {
                            name: 'var__m_sys_hub_flow_input_3f721cf197689bd45c91b63de053afab'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73725cf197689bd45c91b63de053af14'
                        key: {
                            name: 'var__m_sys_hub_flow_output_3f721cf197689bd45c91b63de053afab'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '73941ad88b18463a8707d1e5a6367648'
                        key: {
                            sys_ui_section: {
                                id: 'f6a85aa2900446eaa7cbdb89061e2be8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Committee / OPM Decision'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '73c39fc1d154438ab714b1d94c217793'
                        key: {
                            document_key: '6abbd42fb24e480fb0483843e59f22b8'
                            variable: '0f4e18f6c7ad5110bfbaf89f51c260f0'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '744485fd9760dbd45c91b63de053afa7'
                        key: {
                            id: 'fda8123266e244db8f917bded93d2382'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7487e8cf1669458582d5008179256e0b'
                        key: {
                            document_key: 'c7d96757741e42359ba3d689bd97f494'
                            variable: '24bdf44673030010fe4a6da44cf6a707'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '74a725fd8f5c46479389311b1b986c34'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacancy_reason'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '74cad19ff2934ead8115a7f8cd96d48f'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'opm_decision_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '75159f1a3df64fe68eb9e0955489e511'
                        key: {
                            sys_security_acl: 'dd989afec66741798376c14c6e0e06a1'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7572aa5f00e84440ac97846ad1ac36d1'
                        key: {
                            document_key: '220401ea2994417aa81b58c360d16ecb'
                            variable: '78f334b8c763001085f5532bb4c26009'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '758ac48e60114d369842b1e273d5f429'
                        key: {
                            sys_security_acl: 'de50f2a3251f45f79a3b1b42693a7394'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '75b58a1ad3da463fa46e7888518cc84f'
                        key: {
                            document_key: '4115562f58cb41309eaf374d82137410'
                            variable: '54c49bc60f3200102920c912d4767ee2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '761a840bb5d34632b09bf04610d52cc9'
                        key: {
                            document_key: 'c7d96757741e42359ba3d689bd97f494'
                            variable: '49ed24875b00001070e4492c11f91aa5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '76ac9b4cf72a45a3acef8e78ee413f48'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            value: 'requisition_submitted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76b8034962b34c15993bd72a838f1eda'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'unfilled_impact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '76ba36ade7a04797b32daf39d8ffead8'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_current_salary'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '76ef70719760dbd45c91b63de053afb0'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            view: {
                                id: 'e5d670f6773c7110f94fc35b8c5a9932'
                                key: {
                                    name: 'playbookapproval'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '76ef70719760dbd45c91b63de053aff6'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: '7eef70719760dbd45c91b63de053aff4'
                            position: '0'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '773405fd9760dbd45c91b63de053af56'
                        key: {
                            id: '57679f3af5474396bd9e26febe1ff121'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '775254b197689bd45c91b63de053afe8'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_fb5254b197689bd45c91b63de053afcb'
                            element: 'error'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '77c1ca7b633f41b5afc3eac3b940ab64'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            caption: 'Position Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '77e9c525ce31412998ac5791563f065d'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'committee_decision'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '78201a257bbe421da661d9d586227e08'
                        key: {
                            document_key: '668bb3d7b59d47a790107daefbc48bfa'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '7858432cca3d447881adce9d16fc22d9'
                        key: {
                            model: '89eff1961597477c8a476f6e2f451de1'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '785f70f7d5ca446db8ec931e3d9fa766'
                        key: {
                            model: 'fed85ed115a54408852597482a71c3aa'
                            element: 'department_sys_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '78654cf6f0a04475b50810fa5585d4be'
                        key: {
                            document_key: '3d321a3e935c41df8a12c98d27b6d15f'
                            variable: '4cf4ffc9732741d8971f6ea32d457a90'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78a6b151796d4577b3f62415745f9ed4'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_exemption_reason'
                            value: 'les10_plus'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '78f61d054d51482e8b9b67bbd8a008cc'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_unbudget_position'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7957647ff5d242e59fbab2c05af73b09'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_position_info_start'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7957ce0493aa410f8eb33e1470272fc5'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_committee_decision'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7972868a7fdf421d81d8aaed516c10fb'
                        key: {
                            document_key: 'f749db0c4961417caef370d8e3453a38'
                            variable: 'f62d06e222144a8abfd7e0678fbc27fd'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '79ce16efb9aa48bfb6921a9caed8ae84'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'employment_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a301d49bbf54eb8a1766b0578db0346'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'key_leadership_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7a35bad41e1647f4956b53ab3edb411e'
                        key: {
                            document_key: '26d4e928d1574d8d813f960bbeb6f8f7'
                            variable: '8c07aba5ff6033008d3f5d9ad53bf13b'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7a5ce6737bee411dbde5a79b16e78a74'
                        key: {
                            id: '7eb1d0a3a8f0489c9af271c5b2952fe1'
                            table: 'var__m_sys_hub_step_ext_input_7eb1d0a3a8f0489c9af271c5b2952fe1'
                            field: 'department_sys_id'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7a777dda18b248ab8d020b3c61010c81'
                        key: {
                            sys_security_acl: '3f8600f7f8b94320b563d0d2ff2e0da9'
                            sys_user_role: {
                                id: '2b2ddd98bd864e0a8d50f609d55ca7e2'
                                key: {
                                    name: 'x_snc_sas_positi_0.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7ad6fe1a77cb430e8ac1cc181fae0cd2'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_justification_end'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '7b3405fd9760dbd45c91b63de053af32'
                        key: {
                            id: '428812d28e2a4f058313156eaa12877d'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '7b3405fd9760dbd45c91b63de053af90'
                        key: {
                            id: '66bad4eb6a0b4ff588bdd4c819d3b62f'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7b5a935bab16476bb14effabf9662d47'
                        key: {
                            document_key: '8c1c00af0e93445fa849f1b40c4271df'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7b6d0e58334047879ee12bf591bc5858'
                        key: {
                            id: '807b0634bd944d69951e9fe1cf3f2e81'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7b76dafdd9fe4316964436d66e2eb7f7'
                        key: {
                            id: 'dc6d40bdcccf4dd4b3be966bf8efc32c'
                            table: 'var__m_sys_hub_step_ext_input_dc6d40bdcccf4dd4b3be966bf8efc32c'
                            field: 'case_sys_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7b90d503feab4a24b95c4b497f71fd54'
                        key: {
                            document_key: '1e653f76d6af457ea00ee1885550e750'
                            variable: '54c49bc60f3200102920c912d4767ee2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7bb8b7f35b6d481eb5203fd43b992231'
                        key: {
                            document_key: '1a7528b183e94354955dc352b9973adc'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7bf02ba943a4446d8fcdaa5580ce70c3'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: 'd803775a5b01001031a67d6f7281c7aa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7c07f45c22ba4081b762455f58b81982'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'return_reason'
                            value: 'missing_information'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7c0d3a4ab2c341d2a88cde032953aea5'
                        key: {
                            id: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7c28687888b44147a5b52162433da6cd'
                        key: {
                            id: '7b02acd66cb947899b84fe455b8b9100'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7c2b2fe34d514d69bcf070edb40eb71e'
                        key: {
                            id: '2dda10504e464176a36a179d6f7d2514'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7c4d7b16256e4635ba33f9df0c6e413c'
                        key: {
                            document_key: '0368b62a9a1e40f390cad952e91a6175'
                            variable: '7480c46d375403109267bac734924b4c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7cc652c745f1428eac78d99ba60271d2'
                        key: {
                            document_key: '0dc7e55aba914b15835fd1e5cdd40e69'
                            variable: '7480c46d375403109267bac734924b4c'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7cc7d77987b34280ba40f57ef38eb9ef'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_vacancy_info_split'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '7ccd7fad796645cd848c36cd135b89e5'
                        key: {
                            model: '625966fabf1241188c90384112c820a5'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7cdb206e4f584514b4cfabedec22441c'
                        key: {
                            name: 'var__m_sys_hub_flow_output_93158c9efb474c7bb780c1a1bebcb007'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7cf34d2481b542619123ed2fa796aa1c'
                        key: {
                            document_key: '9b1bdab7f6584729ae3809d69c2ecf78'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7d84c0a41e13472ea39e70287cf046ed'
                        key: {
                            id: 'c7d96757741e42359ba3d689bd97f494'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7d8d8d3725604127a38bfd9a7f5dfea5'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7da2461e76d74ff9938b5fb12a001479'
                        key: {
                            id: '4115562f58cb41309eaf374d82137410'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_checklist'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7db26a749a364c058ff871e562d741e0'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7dd06dd10d074d3799ab0f42cf6373ea'
                        key: {
                            document_key: '5c8e2290804545679d5b960641c4e408'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '7e608a9cb7a941b38efcce7f25217de8'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e8de9200d354e86ae94b03b919f1060'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'committee_decision'
                            value: 'more_info'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7ee9ee5c397343c5a361ad506fc7be40'
                        key: {
                            id: '8668824cf52647e48b2074cec54f4a1b'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_sla'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '7eef70719760dbd45c91b63de053afd4'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'NULL'
                            view: {
                                id: 'e5d670f6773c7110f94fc35b8c5a9932'
                                key: {
                                    name: 'playbookapproval'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '7eefb0719760dbd45c91b63de053af26'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            view: {
                                id: '15b4872797be03d05c91b63de053af80'
                                key: {
                                    name: 'licensepermitplaybook'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f226ffea078471cba0e46c445a0b11e'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'streamlining_fit'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7f2afc3f5ead4628894d1cc4a7737a50'
                        key: {
                            document_key: '8668824cf52647e48b2074cec54f4a1b'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '7f3405fd9760dbd45c91b63de053af33'
                        key: {
                            id: '428812d28e2a4f058313156eaa12877d'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '7f3405fd9760dbd45c91b63de053af43'
                        key: {
                            id: '486ed840105647b1928a16fa91c6a5f5'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '7f3405fd9760dbd45c91b63de053af5d'
                        key: {
                            id: '59d4a709ac0d48349ff508f9ccd63696'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '7f3405fd9760dbd45c91b63de053af91'
                        key: {
                            id: '66bad4eb6a0b4ff588bdd4c819d3b62f'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '7f3405fd9760dbd45c91b63de053afa1'
                        key: {
                            id: '67466c27963b42ba81cd8c6785cdd7ee'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7f4fb940e4314c288951d97de4a4b47a'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: '12e9e761870300102252c88fc0e3ecb2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7f5b6900e9454806ac12b22511dd2a28'
                        key: {
                            id: '8c1c00af0e93445fa849f1b40c4271df'
                            table: 'var__m_atf_input_variable_1f39a288df60220062fe6c7a4df2639d'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f85babeb917484bad2f4fde3cae8ef5'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'division'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '7fe1124aaf684a4281f36d5b755975ac'
                        key: {
                            model: '312a6676ff8a49bb87cac61b44bdd7f6'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '802b42b22ead4c4cb65b8bd12584dae3'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacancy_reason'
                            value: 'new_position'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '804405fd9760dbd45c91b63de053afc8'
                        key: {
                            id: '7957647ff5d242e59fbab2c05af73b09'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '804445fd9760dbd45c91b63de053af3f'
                        key: {
                            id: '93f9ef25696043e490ae60d3f6ed81c3'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '804445fd9760dbd45c91b63de053af4f'
                        key: {
                            id: '986830db90cb4872be95d15d3c18c0a7'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '804c94cb81fa43d9ba863e7549b85d46'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacancy_reason'
                            value: 'retirement'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '80674480cf1e497c969fd17c8618a6d1'
                        key: {
                            id: '7b02acd66cb947899b84fe455b8b9100'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '808186fe733543078148b0a2bf7b4577'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'title_contains_director'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '809f274bb98f4fb9aedc0208215f10e2'
                        key: {
                            document_key: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '80eb7b08022f4b34b25bca98ee5642c6'
                        key: {
                            document_key: '7eb1d0a3a8f0489c9af271c5b2952fe1'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '816c916497a45f945c91b63de053af8d'
                        key: {
                            sys_ui_section: {
                                id: '035c916497a45f945c91b63de053af72'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'watch_list'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8226fc2757bc427f97948fbaec8a0ae7'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8303b351c9cb490fa6b1e92f85f085e6'
                        key: {
                            document_key: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8317e91f2e0240bca3209daf3ef05f68'
                        key: {
                            sys_security_acl: 'b7da98e615594e3f882cd86e89ee65d0'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '83e82e16c4c84ec2942b83b17054ae6d'
                        key: {
                            document_key: '2dda10504e464176a36a179d6f7d2514'
                            variable: '55628762c3211010381b60bc0eba8fec'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '843301aeac28424f97c130f644c03747'
                        key: {
                            id: '668bb3d7b59d47a790107daefbc48bfa'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '844405fd9760dbd45c91b63de053afc9'
                        key: {
                            id: '7957647ff5d242e59fbab2c05af73b09'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '844445fd9760dbd45c91b63de053af50'
                        key: {
                            id: '986830db90cb4872be95d15d3c18c0a7'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '846294b197689bd45c91b63de053afad'
                        key: {
                            id: '735254b197689bd45c91b63de053af9d'
                            table: 'var__m_sys_hub_action_output_735254b197689bd45c91b63de053af9d'
                            field: 'director'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: '846294b197689bd45c91b63de053afb2'
                        key: {
                            action_type_id: '735254b197689bd45c91b63de053af9d'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8463d08033ef4816ab3baa56df53a055'
                        key: {
                            document_key: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            variable: '01fcbc0673030010fe4a6da44cf6a7d6'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '847a446fb9f64a0bbd237fcca83de472'
                        key: {
                            id: 'c7d96757741e42359ba3d689bd97f494'
                            table: 'var__m_sys_hub_flow_input_2b8b42e31b630010affd0e55cc4bcbe9'
                            field: 'message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8494190e2b681fd0b7b1f93a5e91bf46'
                        key: {
                            name: 'var__m_sys_pd_snapshot_input_3b84190e2b681fd0b7b1f93a5e91bf0d'
                            element: 'parent_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '84e7a62fb9d944d8be3e8d498ffe7fd2'
                        key: {
                            model: '4e9c593b813d43faae56cda8f14cedc9'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '84f8983e1ffb4ddc99d58579e9c23c0f'
                        key: {
                            sys_security_acl: '4851202ba1b344dd88919861b6f3851c'
                            sys_user_role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8544c89bf9214e38bf6bd0b9aabd1163'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '855589b197a0dbd45c91b63de053af5a'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'pending_description'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '855589b197a0dbd45c91b63de053af5d'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'form_fields'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '863a64d2536c436dab220b1a34b2cb65'
                        key: {
                            model: 'ace0bfa0c29c46d2831f2d3af2e375cf'
                            element: 'next_status'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '863bcd4d663c47feb93dbf1939276d4d'
                        key: {
                            document_key: '0006de7a35ef4ce89a9123f432c40783'
                            variable: '6c6499fbff001010393e53bd6338f1c8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '865017277936405fbcdd81b50cc72d4a'
                        key: {
                            document_key: 'e6728198f65942229535b889f83873b0'
                            variable: '98c44875ffa033008d3f5d9ad53bf1fa'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '865a0fac0ae24915a435f63a6e68afa3'
                        key: {
                            document_key: '220401ea2994417aa81b58c360d16ecb'
                            variable: '267e68875b00001070e4492c11f91a34'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '867820160876421b836e44ca6f2941e3'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_current_grade'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '86d6aca8121c411996fa0d4c54676a7f'
                        key: {
                            document_key: '03107244bcb24eadb35439bc73bd44cf'
                            variable: '5c5f3949ffb332109267ffffffffffef'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '86d93fc70f044fc38fca76c107d376ba'
                        key: {
                            document_key: '1f0c54535e16496ebdccde97e6b853f6'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '86ef22c14a5c45c2af81889871b7e3c4'
                        key: {
                            sys_ui_section: {
                                id: 'dc56d3e529734e42a9852ea20a574160'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Justification'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_just_streamlining'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '86f1648eb50d433c92da935818595ee9'
                        key: {
                            category: 'x_snc_sas_positi_0_job_req'
                            prefix: 'REQ'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '873c036146674de7876f4e9bc82a31cb'
                        key: {
                            document_key: '05fb75b0578c424f9f7556ce9e827cb3'
                            variable: '074e5876c7ad5110bfbaf89f51c26087'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '8742ba8aacb6464ab1b5956ba1b5bb93'
                        key: {
                            model: 'dc6d40bdcccf4dd4b3be966bf8efc32c'
                            element: 'case_sys_id'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '875b11c63a7d426f9840aac8c75308f0'
                        key: {
                            id: 'f33477e70d09408ca4110f327692afb8'
                            table: 'var__m_sys_hub_action_output_f33477e70d09408ca4110f327692afb8'
                            field: 'basis'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '875da89a72244750b1eaf253b9f1eaf6'
                        key: {
                            document_key: '7b02acd66cb947899b84fe455b8b9100'
                            variable: '4f9fdae51bbb001094630f28cc4bcb66'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '876ff96a30ce4449af09301bbbb3923b'
                        key: {
                            sys_ui_section: {
                                id: '5c5795a9d90e4faa95915618d3308b04'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Vacancy Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_vacancy_reason'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '87bfd594f01a4114a03d7ba3c2f0c2fe'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_sla'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '87e35cfe1c8942ed9058323be87918dc'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_duties_start'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '88727e931f3f44cda7860077eaf931b2'
                        key: {
                            document_key: 'e6728198f65942229535b889f83873b0'
                            variable: '1778a7480f20101091d0f00c97767e03'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '88b548c92e6a4707a6eb87194b29962b'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_vacancy_reason'
                            value: 'new_position'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '891be59493d64b46bd4fd74e85537d21'
                        key: {
                            document_key: '12dca8870c744c49b8f5e4b2c5415e94'
                            variable: '98c44875ffa033008d3f5d9ad53bf1fa'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '895589b197a0dbd45c91b63de053af5f'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'form_view'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '898651e5a4ca4b088b153c15892921ad'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '54c49bc60f3200102920c912d4767ee2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '899c799fd6054eefb721ebf0c98ccd08'
                        key: {
                            id: '7b02acd66cb947899b84fe455b8b9100'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '89ec8928c0a649d68f92cca36d21f6aa'
                        key: {
                            name: 'var__m_sys_hub_flow_output_ec9aa9fcab5f48e4894d649302f8b0bf'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '89ef3039544b48a9b7aafe0eeb93c49f'
                        key: {
                            model: 'd04881f1f8fe4ad6bc1cc70c5a70b0e9'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8a154d06e27c41719c5c536200a9e55a'
                        key: {
                            id: '1f0c54535e16496ebdccde97e6b853f6'
                            table: 'var__m_atf_input_variable_17a72288df60220062fe6c7a4df26397'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8a8ec1731e714920bee69ce24d5c4a65'
                        key: {
                            document_key: '4115562f58cb41309eaf374d82137410'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '8aef3c319760dbd45c91b63de053af8d'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            view: {
                                id: 'd58d1516771042103b35bfa64b5a995e'
                                key: {
                                    name: 'PlaybookProposeDecisionSB'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '8aefbc319760dbd45c91b63de053af16'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'sn_gsm_government_service_task'
                            view: {
                                id: 'd58d1516771042103b35bfa64b5a995e'
                                key: {
                                    name: 'PlaybookProposeDecisionSB'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '8b5290b197689bd45c91b63de053aff1'
                        key: {
                            model: 'b65290b197689bd45c91b63de053afc8'
                            element: 'meeting_date'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8bdd72d195e4483e9f811c812f5f6a1b'
                        key: {
                            id: 'c7d96757741e42359ba3d689bd97f494'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'icon'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '8c4445fd9760dbd45c91b63de053af3d'
                        key: {
                            id: '93f9ef25696043e490ae60d3f6ed81c3'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8c5bade915fe4d91a603fba8a151fb9e'
                        key: {
                            sys_security_acl: 'f8eaee2f9099473f86cbcc2d6fd8e865'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c6294b197689bd45c91b63de053af1c'
                        key: {
                            name: 'var__m_sys_hub_action_output_735254b197689bd45c91b63de053af9d'
                            element: 'director'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '8c6294b197689bd45c91b63de053af27'
                        key: {
                            model: '735254b197689bd45c91b63de053af9d'
                            element: 'analyst'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c6294b197689bd45c91b63de053af46'
                        key: {
                            name: 'var__m_sys_hub_action_output_735254b197689bd45c91b63de053af9d'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8c835302b05a4992b13c21f86be056ef'
                        key: {
                            sys_security_acl: 'f8eaee2f9099473f86cbcc2d6fd8e865'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8d030c70406f4d1cb30832c73bf9d1a6'
                        key: {
                            document_key: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            variable: 'd18061f287d300102252c88fc0e3eccb'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8d5589b197a0dbd45c91b63de053af61'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '576de7780f1300102920c912d4767e52'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8da205bacbd244efbd446edd98bcb51d'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: '5fa0e1f287d300102252c88fc0e3ec66'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8daa2f0dfe3c490fa7f46cde007b0490'
                        key: {
                            id: '220401ea2994417aa81b58c360d16ecb'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8dd16764318d4c1e878935ada80ef69d'
                        key: {
                            id: '0006de7a35ef4ce89a9123f432c40783'
                            table: 'var__m_sys_pd_activity_type_prop_dc6459fbff001010393e53bd6338f1cb'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8dfaf3ead7da43bcb6a29f365b1342c7'
                        key: {
                            document_key: '445daa2135034d668c9d6417f33df07a'
                            variable: '0f4e18f6c7ad5110bfbaf89f51c260f0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8e0565958d654d9abd2c7bf54f190c3e'
                        key: {
                            sys_security_acl: 'f0af04a4d4714bd389d044ba2f242a96'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8e3f5223715343ef9e456d098ec1e0d8'
                        key: {
                            document_key: '807b0634bd944d69951e9fe1cf3f2e81'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8e6422f0264e48ff9169149edc13c1f8'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: 'c3aeb10a1bf749d0db4bba63cc4bcbc0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e82d03597689bd45c91b63de053af63'
                        key: {
                            name: 'var__m_sys_hub_flow_output_8a82d03597689bd45c91b63de053af2a'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '8ed4da18dd974e889b39e5ed8731b451'
                        key: {
                            model: 'f71d6da96e444011a9f4c089338c3268'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8f323c7a5bf441ba98cc466cafc7b1a9'
                        key: {
                            document_key: 'ef76de55494d437b8c4ca731db1a9852'
                            variable: '0f4e18f6c7ad5110bfbaf89f51c260f0'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '8f5290b197689bd45c91b63de053affa'
                        key: {
                            model: 'b65290b197689bd45c91b63de053afc8'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '8f52d0b197689bd45c91b63de053af0f'
                        key: {
                            model: 'b65290b197689bd45c91b63de053afc8'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8f5521418cee4a818d2da6c159b7f147'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'funding_source'
                            value: 'cash'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f7298f197689bd45c91b63de053af89'
                        key: {
                            name: 'var__m_sys_hub_flow_input_8f7298f197689bd45c91b63de053af7a'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '9017dcb0a243403cb92b6b2c8694799f'
                        key: {
                            sys_ui_form: {
                                id: '7e608a9cb7a941b38efcce7f25217de8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '1e645db421b84e01bff3ac57ded4bede'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Funding'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '90236874baeb45e0a86d5acaf34df219'
                        key: {
                            id: '2dda10504e464176a36a179d6f7d2514'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '902b6fc5a3304045943ffc780b630900'
                        key: {
                            document_key: '56cde3c4e8d04b178e2ef2029f16bd71'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '904445fd9760dbd45c91b63de053af69'
                        key: {
                            id: 'a0bf19f1dd884db2917b4e098e415520'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '904445fd9760dbd45c91b63de053afad'
                        key: {
                            id: 'b700e7422410424a8228acef2d00211d'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '9063da773eb94cd2a2ab9e5502ff04aa'
                        key: {
                            model: '7eb1d0a3a8f0489c9af271c5b2952fe1'
                            element: 'director'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '90c8b3d435d44bee9488a95e9ebfa763'
                        key: {
                            name: 'var__m_sys_hub_action_output_fed85ed115a54408852597482a71c3aa'
                            element: 'error'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '90e33b9ab275487086c9de3f3600bb5a'
                        key: {
                            document_key: '4115562f58cb41309eaf374d82137410'
                            variable: '3499c6631b630010affd0e55cc4bcb90'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '911d4caf4b064691935849acd5c84bc3'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'candidate_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '915714983ae94f51b23878ac457ff3d8'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'return_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '9162d8b197689bd45c91b63de053af57'
                        key: {
                            model: '1962d8b197689bd45c91b63de053af54'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '91a34d9b917d4e3e94c06b7d091b5e8d'
                        key: {
                            model: '7370b74da3334152a795ea48d819b8e8'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '91a386e3e37b4bbd8a02a09c04f13fbb'
                        key: {
                            sys_ui_section: {
                                id: 'f6a85aa2900446eaa7cbdb89061e2be8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Committee / OPM Decision'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_opm_comments'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '92072767e7c840929ac173580e25f098'
                        key: {
                            document_key: '0006de7a35ef4ce89a9123f432c40783'
                            variable: '786499fbff001010393e53bd6338f1fc'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '925a4ab216f547f1a9d4a8497db6367d'
                        key: {
                            id: '7b02acd66cb947899b84fe455b8b9100'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '927baf251d2e405ea224a555af242dfb'
                        key: {
                            id: '1e653f76d6af457ea00ee1885550e750'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_sla'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9290edc1e7984498ac3025286e63f402'
                        key: {
                            document_key: '1e653f76d6af457ea00ee1885550e750'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '929e56ab3b084911bca938a9fe1a09bf'
                        key: {
                            id: '4e1251c2235d4d28b28f86c4b58deab5'
                            table: 'var__m_sys_hub_action_output_4e1251c2235d4d28b28f86c4b58deab5'
                            field: 'meeting_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92d9e05ef16f4492aaf67ab6d3544b3f'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'turnover_rate_pct'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '93193d84dd384054af71ce6ba0833fd8'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_type'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '9334c1fd9760dbd45c91b63de053af84'
                        key: {
                            id: '11d0df65b9bd48f68f50b61e54f90110'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '935214b197689bd45c91b63de053af9e'
                        key: {
                            model: '575214b197689bd45c91b63de053af60'
                            element: 'error'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '936e7fbea9d04096b20f3a3ec74e04b5'
                        key: {
                            id: '807b0634bd944d69951e9fe1cf3f2e81'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93704d9dd1644273b7cec1bd903062b6'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'grade'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9391aa7704a34d92954f79684c587dbd'
                        key: {
                            document_key: '668bb3d7b59d47a790107daefbc48bfa'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '93b9842ca41e46adb8e3ba5da164f99f'
                        key: {
                            id: 'fed85ed115a54408852597482a71c3aa'
                            table: 'var__m_sys_hub_action_output_fed85ed115a54408852597482a71c3aa'
                            field: 'error'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '93e4efea2f2c4ca7ad8a72b2644799f1'
                        key: {
                            id: '4115562f58cb41309eaf374d82137410'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'title'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '93f9ef25696043e490ae60d3f6ed81c3'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_duties_split'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '942af8a7879e463e862487baf80ed07c'
                        key: {
                            document_key: 'aedb3c5625564efa82605ebbd6a9c1c3'
                            variable: '0f4e18f6c7ad5110bfbaf89f51c260f0'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '944109f41936443288e76854a0f6fcca'
                        key: {
                            model: '2447c57edaca4662b1d0b2ec06473733'
                            element: 'date_time'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '944445fd9760dbd45c91b63de053af6a'
                        key: {
                            id: 'a0bf19f1dd884db2917b4e098e415520'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '944445fd9760dbd45c91b63de053af7a'
                        key: {
                            id: 'a66d9e16ca9f4f15ae2348a011d2ebad'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '94f6b92db24e491db38f412864dc1a2a'
                        key: {
                            document_key: '807b0634bd944d69951e9fe1cf3f2e81'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9522b78c4bd047e9bc6dc8a25ce6d776'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '9582503597689bd45c91b63de053af6a'
                        key: {
                            model: '1d82503597689bd45c91b63de053af67'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '95b68fbd836d42359333b043eaaa411a'
                        key: {
                            id: '029b6913dbf74698a0f6606c43053d29'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_checklist'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '95e99b9c57804d5f8a094e36365778bd'
                        key: {
                            id: '668bb3d7b59d47a790107daefbc48bfa'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_checklist'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '963d6ec6db014a6bb6ce5b024edae8fb'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'unfilled_impact'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96629cb197689bd45c91b63de053af42'
                        key: {
                            name: 'var__m_sys_hub_flow_input_9a629cb197689bd45c91b63de053af32'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '969cee16407b4b13ba0f0ac9075bf8ab'
                        key: {
                            name: 'var__m_sys_hub_action_output_2447c57edaca4662b1d0b2ec06473733'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '969dc423883e48e0b9e21a4a610e418f'
                        key: {
                            document_key: '2d362e4001784e2a847b6d64fac16074'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '96effc319760dbd45c91b63de053af1e'
                        key: {
                            sys_ui_form: {
                                id: '16efbc319760dbd45c91b63de053af6e'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '971cdfae31dd43cf92bf8e9c57797c90'
                        key: {
                            sys_ui_section: {
                                id: 'a0700e8c5c614fb79367e7bb27d8ef11'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Candidate Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_hire_pers_num'
                            position: '3'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '9734c1fd9760dbd45c91b63de053af85'
                        key: {
                            id: '11d0df65b9bd48f68f50b61e54f90110'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '9734c1fd9760dbd45c91b63de053af95'
                        key: {
                            id: '18f3a8848bc042e6980cc252fc71bef3'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '974f4772ba44465f9c1784273d43b09a'
                        key: {
                            sys_security_acl: '520550c2ef894b02a8fa290afbf8775e'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9790de37e0a549b5b2909f53c5acfd3d'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'grade'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97a6c1600ed9402c81622629d4ea4aa4'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'business_area'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '97ae8ae88f7144f59a357574873ee501'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97dcc1ef87cc452fac9da2cd28c11c71'
                        key: {
                            name: 'var__m_sys_hub_flow_output_f71d6da96e444011a9f4c089338c3268'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '981d5222c7f44a6a9f8b5af14e9c5e62'
                        key: {
                            document_key: '2d362e4001784e2a847b6d64fac16074'
                            variable: 'd803775a5b01001031a67d6f7281c7aa'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9832ae8452dc4f049c640b65ce112054'
                        key: {
                            id: 'c7d96757741e42359ba3d689bd97f494'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '984445fd9760dbd45c91b63de053af7b'
                        key: {
                            id: 'a66d9e16ca9f4f15ae2348a011d2ebad'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '98550521df1f41698f32cce052bf2575'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_candidate_info_start'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '986830db90cb4872be95d15d3c18c0a7'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_request_info_split'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '9873cfae1b9c4de18769ff88d04aa615'
                        key: {
                            model: 'f33477e70d09408ca4110f327692afb8'
                            element: 'error'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '988bc3f539ea4349a3f645486f41e7e2'
                        key: {
                            sys_ui_form: {
                                id: '7e608a9cb7a941b38efcce7f25217de8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '77c1ca7b633f41b5afc3eac3b940ab64'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Position Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '98901d72cc7b41f1a71cc83202d39125'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_candidate_info_end'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9924f197d8f14d259b2261f7748932ed'
                        key: {
                            document_key: '8c1c00af0e93445fa849f1b40c4271df'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '99313bd4eef647be9d9cedc2ea90fa83'
                        key: {
                            id: '9b1bdab7f6584729ae3809d69c2ecf78'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '997330e1075047a9bb685de082a9a754'
                        key: {
                            document_key: '0006de7a35ef4ce89a9123f432c40783'
                            variable: 'a1e8dea4db9f0010efc65404ce9619f8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '99bd1a1ad43140e6bc9a7e5ee41e17d8'
                        key: {
                            document_key: '8c1c00af0e93445fa849f1b40c4271df'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a127025cc1648a98bb0787f252fdc0c'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_type'
                            value: 'external'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a229d5fa8a242de87bb318103d4516b'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'personnel_action'
                            value: 'hire'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '9a629cb197689bd45c91b63de053af56'
                        key: {
                            model: '9a629cb197689bd45c91b63de053af32'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '9a6fbd81700046b5b2aab8b4390586cd'
                        key: {
                            model: '93158c9efb474c7bb780c1a1bebcb007'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '9a7218f197689bd45c91b63de053afc0'
                        key: {
                            model: 'de7218f197689bd45c91b63de053af94'
                            element: 'next_status'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '9a9a4ba253254c9db6514aaf0fb9698d'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_request_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9abe3011602e4ec699f55f4faa2a611d'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'work_location'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9aeffc319760dbd45c91b63de053afa1'
                        key: {
                            sys_ui_section: {
                                id: '5aeffc319760dbd45c91b63de053af9f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b3423ad900846a5be19c96b5d71407b'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'division'
                            language: 'en'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '9b34c1fd9760dbd45c91b63de053af44'
                        key: {
                            id: '01e81f707d8c4533be5301e34128ace7'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '9b5214b197689bd45c91b63de053af89'
                        key: {
                            model: '575214b197689bd45c91b63de053af60'
                            element: 'basis'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '9b53915d32304d418f2a4c366eab45cd'
                        key: {
                            role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                            contains: {
                                id: 'f89f0984a08a1110f8770ea6955038cc'
                                key: {
                                    name: 'sn_gsm.case_task_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9b76e9697c8e49c99ba1160388189350'
                        key: {
                            document_key: '0dc7e55aba914b15835fd1e5cdd40e69'
                            variable: '5c5f3949ffb332109267ffffffffffef'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9b79d70548744752ad938a9508838536'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'funding_source'
                            value: 'federal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9c0a7e89dc2a45afb1fefaeb4d7edd1f'
                        key: {
                            document_key: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9c3661941ec94ee893283d1173f56386'
                        key: {
                            document_key: '43334d404da048049e5bb90b26f4a362'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9c73319837cc4c0d848c5a1d59fd8706'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'funding_source'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9c78d7a887474ca4b613dc5106c3f413'
                        key: {
                            document_key: '02962e9bd4374c4c84b7b9fe6dd3afd3'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9cf7f22f674e408db0b68b0e716a681c'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_exemption_reason'
                            value: 'executive'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9cfccf71ef064eb2a435665ba7f96df2'
                        key: {
                            document_key: '8668824cf52647e48b2074cec54f4a1b'
                            variable: '3499c6631b630010affd0e55cc4bcb90'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9d32d5b5097a4b0abfd9911dc428cca6'
                        key: {
                            document_key: '668bb3d7b59d47a790107daefbc48bfa'
                            variable: '54c49bc60f3200102920c912d4767ee2'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9d3c79ae1e624e30b41073b477fa1a8a'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_vacancy_reason'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9d4fab89e17d438c8204c6ef1885876b'
                        key: {
                            document_key: '807b0634bd944d69951e9fe1cf3f2e81'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d5960433404405c9e7afb754c70e651'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'candidate_current_grade'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9d6231b8e766418191bbe56996cac543'
                        key: {
                            id: 'c1335788ee1d47d3bd24819320827b89'
                            table: 'var__m_atf_input_variable_071ee5b253331200040729cac2dc348d'
                            field: 'user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9dc341ce1fea405798e3e37f4e6d9bf6'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'opm_decision_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9e309d822790425d92e0b6ba922de0f3'
                        key: {
                            document_key: 'ef76de55494d437b8c4ca731db1a9852'
                            variable: '074e5876c7ad5110bfbaf89f51c26087'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9e6e441429c24bc6bd20a083e8c4f6d1'
                        key: {
                            document_key: '2dda10504e464176a36a179d6f7d2514'
                            variable: 'c23322e91bbb001094630f28cc4bcbae'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9ea3fa98e7c3457abea7ff6310a29fdd'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'work_location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9eefbc319760dbd45c91b63de053af7d'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'account'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9eefbc319760dbd45c91b63de053af7e'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9eefbc319760dbd45c91b63de053af7f'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9eefbc319760dbd45c91b63de053af80'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9eefbc319760dbd45c91b63de053af81'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9eefbc319760dbd45c91b63de053af82'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9efb33c3ea684fa4882ecec1744bd072'
                        key: {
                            document_key: '26d4e928d1574d8d813f960bbeb6f8f7'
                            variable: 'ff06ab840f20101091d0f00c97767e6d'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '9efb7a91ca1c4d5caff83c4ee2b8878a'
                        key: {
                            model: '7370b74da3334152a795ea48d819b8e8'
                            element: 'basis'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '9f5214b197689bd45c91b63de053af10'
                        key: {
                            model: '1f5214b197689bd45c91b63de053af0b'
                            element: 'case_sys_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9f60f68456d1423d9e5b0bb6d92808c8'
                        key: {
                            document_key: '220401ea2994417aa81b58c360d16ecb'
                            variable: 'ec5d96eac7e60010bfbaf89f51c2605d'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9fe8bcddd42a4000a0a105946d6e96ff'
                        key: {
                            id: '220401ea2994417aa81b58c360d16ecb'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'a04485fd9760dbd45c91b63de053af77'
                        key: {
                            id: 'e13bd2c6c9b2458da925d2f50d839ba6'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a0624f4c85464084a9106007001f0217'
                        key: {
                            id: 'f33477e70d09408ca4110f327692afb8'
                            table: 'var__m_sys_hub_action_output_f33477e70d09408ca4110f327692afb8'
                            field: 'error'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'a0700e8c5c614fb79367e7bb27d8ef11'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            caption: 'Candidate Information'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a07c7dc0e3334944a095ec7bd9803d9a'
                        key: {
                            id: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0acfdb864c0438fbdf5d651edfc2a0c'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'pay_table'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a0ba5b4c7a2c4c968ca89e5e921b23a0'
                        key: {
                            name: 'var__m_sys_hub_action_output_4e1251c2235d4d28b28f86c4b58deab5'
                            element: 'meeting_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'a0bf19f1dd884db2917b4e098e415520'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_requested_salary'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a11e42e559e24f06bd31ffa5feb8e314'
                        key: {
                            document_key: '2dda10504e464176a36a179d6f7d2514'
                            variable: '661d304673030010fe4a6da44cf6a7b1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a13cf7d0dfc743a6abaf8dc4c2dfe461'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'org_chart'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: 'a17294f197689bd45c91b63de053afde'
                        key: {
                            model: 'a97294f197689bd45c91b63de053afb8'
                            element: 'basis'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1d4a80ab58746bf87aa1372e059f53d'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'submitted_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a205ffab2dfe472baad5f991c2f5c34a'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_business_area'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a24622a9589147668608e226864b52a7'
                        key: {
                            id: '2dda10504e464176a36a179d6f7d2514'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a25cd2558e33400d884e3842dae76ccb'
                        key: {
                            document_key: '4115562f58cb41309eaf374d82137410'
                            variable: 'd803775a5b01001031a67d6f7281c7aa'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a2770b7869ce48ed9a34d46799f565f9'
                        key: {
                            document_key: '09f943cf48f846b299d9f1d9cfa65a45'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a28f8cfae2994e8aae700bf8493cc195'
                        key: {
                            id: '9b1bdab7f6584729ae3809d69c2ecf78'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_checklist'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a2924be6819a42f69f93796e8adf9158'
                        key: {
                            document_key: '0368b62a9a1e40f390cad952e91a6175'
                            variable: '5c5f3949ffb332109267ffffffffffef'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'a2e9b848067d471e861a8f920931709c'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_position_info_end'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'a2ef30719760dbd45c91b63de053afee'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'NULL'
                            view: {
                                id: '0b28fe81ec8003108bb2d76241880c97'
                                key: {
                                    name: 'workspace'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a2f552b0a6774d63ba25766ae5a8bbc0'
                        key: {
                            document_key: '7b02acd66cb947899b84fe455b8b9100'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'a334c1fd9760dbd45c91b63de053afe2'
                        key: {
                            id: '34e9b4011a034874bcff18605dba5618'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a36210f197689bd45c91b63de053afd4'
                        key: {
                            name: 'var__m_sys_hub_flow_output_ef6210f197689bd45c91b63de053af8d'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a37b1588da7e4bb3a2d88030fa2b11e8'
                        key: {
                            id: '668bb3d7b59d47a790107daefbc48bfa'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a37b943a1a884d6c9aa1f512e013fc7d'
                        key: {
                            id: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a37f4d795a1044deb0a847394bed1619'
                        key: {
                            document_key: '220401ea2994417aa81b58c360d16ecb'
                            variable: '6c9c4ee31b630010affd0e55cc4bcbbf'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a3940d1081ac407c98f474b2e1c2b19f'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'return_reason'
                            value: 'job_description_copy'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a3a7ada260ce40c9b950d2e4e4721d68'
                        key: {
                            document_key: '9179ef7f351a48b6a83fa37ba5625a36'
                            variable: '8c07aba5ff6033008d3f5d9ad53bf13b'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a3ac203f2f994a95a0272438934b6c15'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'salary_exceeds_threshold'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a3c2f7c8586d47bba4f32ebe09efd5a3'
                        key: {
                            id: '807b0634bd944d69951e9fe1cf3f2e81'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'a3f5f4a296f848db8d7bb2e003345587'
                        deleted: false
                        key: {
                            ui_policy: '562141bda5a04b229dd2420a0ec05926'
                            field: 'u_hire_name'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a43aa2019e3e4861909c7caaf2d97ca0'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'employment_type'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'a44485fd9760dbd45c91b63de053af78'
                        key: {
                            id: 'e13bd2c6c9b2458da925d2f50d839ba6'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a47cf3829fbe47818a570814f8012b92'
                        key: {
                            id: '9b1bdab7f6584729ae3809d69c2ecf78'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a4ad85695fa047a5b38edfb1c564831b'
                        key: {
                            document_key: '2d362e4001784e2a847b6d64fac16074'
                            variable: '3499c6631b630010affd0e55cc4bcb90'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4af6c5d12844b10946efcc8bdbd0858'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_vacancy_reason'
                            value: 'termination'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a4c9c7e2bc1d49fb96ce9fe166c76cc0'
                        key: {
                            document_key: '2d362e4001784e2a847b6d64fac16074'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a504cb8e48664788b54fd06527c6fc73'
                        key: {
                            sys_security_acl: '7182583bea424428882fa5d0e1b2a4fe'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a54bd5cbd50e4ca8902bd0c8633ed845'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'a60db73a94ef46809332d139f2790a12'
                        key: {
                            model: '2447c57edaca4662b1d0b2ec06473733'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a615e8f83d734a1db2dd47333943f1b7'
                        key: {
                            document_key: '7b02acd66cb947899b84fe455b8b9100'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6260626615e4dbf9b794ff41c0e2986'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacancy_reason'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'a63f3aace8494273a20b97ded3aaa295'
                        key: {
                            model: '2447c57edaca4662b1d0b2ec06473733'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a641f39cf4324d1db2435438686ccdfb'
                        key: {
                            id: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_sla'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a65250b197689bd45c91b63de053afed'
                        key: {
                            id: '6e5250b197689bd45c91b63de053af62'
                            table: 'var__m_sys_hub_action_output_6e5250b197689bd45c91b63de053af62'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'a66d9e16ca9f4f15ae2348a011d2ebad'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_vacancy_info_start'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a6af039fafde433bbdcd44895e9ff8dc'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_fund_src_2'
                            value: 'cash'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'a6ef30719760dbd45c91b63de053af3f'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'Notes'
                            view: {
                                id: 'd9a85e2493f08310d6b527dbd7373cf8'
                                key: {
                                    name: 'case'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'a6ef30719760dbd45c91b63de053af6c'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            view: {
                                id: 'a22b4ae3b7702110f94f20b3ae11a980'
                                key: {
                                    name: 'Checklist'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'a6effc319760dbd45c91b63de053afd2'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'Notes'
                            view: {
                                id: '739763c0a3d50210974f00dfe51e611d'
                                key: {
                                    name: 'conductInterview'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'a734c1fd9760dbd45c91b63de053afe3'
                        key: {
                            id: '34e9b4011a034874bcff18605dba5618'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'a734c1fd9760dbd45c91b63de053aff3'
                        key: {
                            id: '38caae0a70f84ce38c2ad3b360f56e0c'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a76210f197689bd45c91b63de053afab'
                        key: {
                            name: 'var__m_sys_hub_flow_input_ef6210f197689bd45c91b63de053af8d'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a77181031910461d923c2cd6696bc43f'
                        key: {
                            document_key: 'd9938bb6667c429c8c967e2ce0c9052f'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a77d45a92be0d7d0b7b1f93a5e91bff0'
                        key: {
                            name: 'var__m_sys_decision_multi_result_element_9433e73f4e75429e998c33f4fd6f04d7'
                            element: 'request_basis'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a7aa08ab35bf4ff08327993a513b01b6'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a7f5d1c26e674126b7d45fd480b62f5b'
                        key: {
                            name: 'asmt_metric_type'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a827767565ce4c8baa42ad7495a77160'
                        key: {
                            document_key: '26d4e928d1574d8d813f960bbeb6f8f7'
                            variable: '1778a7480f20101091d0f00c97767e03'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a882dcf197689bd45c91b63de053afc4'
                        key: {
                            name: 'var__m_sys_hub_flow_input_ac82dcf197689bd45c91b63de053afb2'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8facaad77ac43909d2e768040a02451'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'requisition_acknowledged_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a90732910c754582b2dd1d1c2f94ddc1'
                        key: {
                            name: 'var__m_sys_hub_action_output_f33477e70d09408ca4110f327692afb8'
                            element: 'basis'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a95a8cce4ea542c7b3c9fb5e92edd4a3'
                        key: {
                            document_key: '1e653f76d6af457ea00ee1885550e750'
                            variable: '3499c6631b630010affd0e55cc4bcb90'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a96c95642bac1f90b7b1f93a5e91bf5b'
                        key: {
                            sys_ui_section: {
                                id: '035c916497a45f945c91b63de053af72'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a9a27af040364487b348fa2cce25b1f6'
                        key: {
                            document_key: '473a7ba95d224dd585a0102ab64a7423'
                            variable: '1985e0ceff2433008d3f5d9ad53bf1ba'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a9bf7fa84e544a438905f99c1b9324fe'
                        key: {
                            name: 'var__m_sys_hub_flow_output_89eff1961597477c8a476f6e2f451de1'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a9dfd7e0a4da4a50867dc983e4899fe9'
                        key: {
                            document_key: '99be11b492bf4f5d85bf773a30dd7178'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a9e3553bfae143bb914dd103201767b9'
                        key: {
                            sys_ui_section: {
                                id: 'f6a85aa2900446eaa7cbdb89061e2be8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Committee / OPM Decision'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_opm_date'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'aa2d5f361d014e25aa6a1b4a3670006a'
                        key: {
                            id: '2dda10504e464176a36a179d6f7d2514'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'icon'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa5250b197689bd45c91b63de053afc9'
                        key: {
                            name: 'var__m_sys_hub_action_output_6e5250b197689bd45c91b63de053af62'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa5250b197689bd45c91b63de053afe3'
                        key: {
                            name: 'var__m_sys_hub_action_output_6e5250b197689bd45c91b63de053af62'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'aa66cc3219ca48d4a97ec8ac264b56d7'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'aac171aa14a04f4daa55eb4ce807ba2c'
                        key: {
                            document_key: '09f943cf48f846b299d9f1d9cfa65a45'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'aaef30719760dbd45c91b63de053af3e'
                        key: {
                            sys_ui_form: {
                                id: '26effc319760dbd45c91b63de053affe'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'aaeffc319760dbd45c91b63de053afd1'
                        key: {
                            sys_ui_form: {
                                id: '16effc319760dbd45c91b63de053af9a'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '5aeffc319760dbd45c91b63de053af9f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'aaf8286e04fd4b44952f777a364186db'
                        key: {
                            sys_security_acl: '700281beb7874ddba097156771f77829'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ab10ba002e944cf3971dd1a0d9e13370'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_exemption_reason'
                            value: 'med08_plus'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ab24110d44484dc2b55628deb9a5af6a'
                        key: {
                            sys_ui_section: {
                                id: 'a0700e8c5c614fb79367e7bb27d8ef11'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Candidate Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_candidate_applicable'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ab2993380299429fab03372e7ed52cfb'
                        key: {
                            id: '029b6913dbf74698a0f6606c43053d29'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'ab34c1fd9760dbd45c91b63de053af96'
                        key: {
                            id: '18f3a8848bc042e6980cc252fc71bef3'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'ab34c1fd9760dbd45c91b63de053aff4'
                        key: {
                            id: '38caae0a70f84ce38c2ad3b360f56e0c'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'ab5214b197689bd45c91b63de053afbe'
                        key: {
                            model: '1f5214b197689bd45c91b63de053af0b'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'ab5214b197689bd45c91b63de053afd3'
                        key: {
                            model: '1f5214b197689bd45c91b63de053af0b'
                            element: 'error'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ab5214b197689bd45c91b63de053afd9'
                        key: {
                            name: 'var__m_sys_hub_action_output_1f5214b197689bd45c91b63de053af0b'
                            element: 'error'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ab52202383734ecb9119870dd5228d63'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'positions_authorized'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ab6bf911ace84a308d893b2963db6f18'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacancy_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'abad2935619240b0b8626b1b80b6df7d'
                        key: {
                            document_key: '3e5ebddc46ba4f668c4d0c3e91fea8cc'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'abb069d0b87847deac5d8903804c3a7f'
                        key: {
                            document_key: '0a0d7f2f42264f71b4159629d1226b07'
                            variable: '736b784a8c564b60947b631109a186c8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'abb9e149ec7044798b7b84e4998c7fbf'
                        key: {
                            sys_ui_section: {
                                id: '77c1ca7b633f41b5afc3eac3b940ab64'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Position Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_job_title'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'abbd585062ed4f55a61abf96c0dcf8c8'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_vacancy_reason'
                            value: 'resignation'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'abd85f36adf34e6a8d88af5d4afd03c1'
                        key: {
                            sys_ui_section: {
                                id: 'a0700e8c5c614fb79367e7bb27d8ef11'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Candidate Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_hire_name'
                            position: '2'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'abf476e7687846c09926ed348afb859c'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_fund_pct_1'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ac0c3a7f66e54728a25b4e09a354b6d3'
                        key: {
                            id: '668bb3d7b59d47a790107daefbc48bfa'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ac18ccc0d8174294874b8a905c8c30e9'
                        key: {
                            document_key: '2d362e4001784e2a847b6d64fac16074'
                            variable: '54c49bc60f3200102920c912d4767ee2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac23d027c48e4bdca653b1dbc169148e'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'budget_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac333a2768f946099025663fb4de1f72'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'funding_source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ac423081d21b48898aac3fddec7652c1'
                        key: {
                            id: '2dda10504e464176a36a179d6f7d2514'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ac51b171275943b792dec6126293c8b5'
                        key: {
                            id: '668bb3d7b59d47a790107daefbc48bfa'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ac5f202d300b4cdebe8ce5eedbbb7edf'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: '1ec899171b934150db4bba63cc4bcb3a'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ac6e4588263a49ce842c97a9a9ebd14c'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_committee_decision'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'acaa4d311033468ab0e022a2ba6143d6'
                        key: {
                            id: '5c8e2290804545679d5b960641c4e408'
                            table: 'var__m_atf_input_variable_14872288df60220062fe6c7a4df26319'
                            field: 'field_values'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'acb039e9a09e46ababc08e886a8583a7'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: '8cfe36a7c3611010381b60bc0eba8fd2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'acd70ce217c749e99d53126f5534792d'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'max_columns'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'ace53cfe109b48d599a05486df8f770d'
                        key: {
                            model: 'ec9aa9fcab5f48e4894d649302f8b0bf'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ad09096b33bc422183890abafa937a41'
                        key: {
                            document_key: '0006de7a35ef4ce89a9123f432c40783'
                            variable: '546499fbff001010393e53bd6338f14e'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ad19c0b1ada449a99dba1a1713a7656d'
                        key: {
                            id: '0006de7a35ef4ce89a9123f432c40783'
                            table: 'var__m_sys_pd_activity_type_prop_dc6459fbff001010393e53bd6338f1cb'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ad58815791784b50b290385385fb2c60'
                        key: {
                            id: '2447c57edaca4662b1d0b2ec06473733'
                            table: 'var__m_sys_hub_action_output_2447c57edaca4662b1d0b2ec06473733'
                            field: 'date_time'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: 'ad72d4f197689bd45c91b63de053af03'
                        key: {
                            model: 'a97294f197689bd45c91b63de053afb8'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad72d4f197689bd45c91b63de053af17'
                        key: {
                            name: 'var__m_sys_hub_flow_output_a97294f197689bd45c91b63de053afb8'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad8c8fa75cc440db851c633bbb73b1e9'
                        key: {
                            name: 'var__m_sys_hub_action_input_f33477e70d09408ca4110f327692afb8'
                            element: 'case_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'adf4955f413a45e4a735975b6b0ed3ab'
                        key: {
                            id: '0006de7a35ef4ce89a9123f432c40783'
                            table: 'var__m_sys_pd_activity_type_prop_dc6459fbff001010393e53bd6338f1cb'
                            field: 'form_view'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'ae2855b433fb411c8ccf8c618185db88'
                        deleted: false
                        key: {
                            ui_policy: '562141bda5a04b229dd2420a0ec05926'
                            field: 'u_requested_salary'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ae321a9e716f41d9b2be779b108ba6c2'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'aec9f62d16414f48bc7fabb5ded24b47'
                        key: {
                            sys_ui_form: {
                                id: '7e608a9cb7a941b38efcce7f25217de8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'dc56d3e529734e42a9852ea20a574160'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Justification'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'aecc83c72cb442c3a86965db4face35f'
                        key: {
                            document_key: '3d321a3e935c41df8a12c98d27b6d15f'
                            variable: 'a532d26fde6d44eeaf7a6d4d24a1fe3d'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aeef30719760dbd45c91b63de053af4f'
                        key: {
                            sys_ui_section: {
                                id: 'a6ef30719760dbd45c91b63de053af3f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aeef30719760dbd45c91b63de053af50'
                        key: {
                            sys_ui_section: {
                                id: 'a6ef30719760dbd45c91b63de053af3f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aeef30719760dbd45c91b63de053af51'
                        key: {
                            sys_ui_section: {
                                id: 'a6ef30719760dbd45c91b63de053af3f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aeef30719760dbd45c91b63de053af52'
                        key: {
                            sys_ui_section: {
                                id: 'a6ef30719760dbd45c91b63de053af3f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'watch_list'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aeef30719760dbd45c91b63de053af53'
                        key: {
                            sys_ui_section: {
                                id: 'a6ef30719760dbd45c91b63de053af3f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aeef30719760dbd45c91b63de053af54'
                        key: {
                            sys_ui_section: {
                                id: 'a6ef30719760dbd45c91b63de053af3f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'aeef30719760dbd45c91b63de053afb9'
                        key: {
                            sys_ui_form: {
                                id: 'a6ef30719760dbd45c91b63de053af6c'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '2aef30719760dbd45c91b63de053af96'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aeeffc319760dbd45c91b63de053afe0'
                        key: {
                            sys_ui_section: {
                                id: 'a6effc319760dbd45c91b63de053afd2'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aeeffc319760dbd45c91b63de053afe1'
                        key: {
                            sys_ui_section: {
                                id: 'a6effc319760dbd45c91b63de053afd2'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aeeffc319760dbd45c91b63de053afe2'
                        key: {
                            sys_ui_section: {
                                id: 'a6effc319760dbd45c91b63de053afd2'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes_list'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aeeffc319760dbd45c91b63de053afe3'
                        key: {
                            sys_ui_section: {
                                id: 'a6effc319760dbd45c91b63de053afd2'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aeeffc319760dbd45c91b63de053afe4'
                        key: {
                            sys_ui_section: {
                                id: 'a6effc319760dbd45c91b63de053afd2'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'comments'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aeeffc319760dbd45c91b63de053afe5'
                        key: {
                            sys_ui_section: {
                                id: 'a6effc319760dbd45c91b63de053afd2'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aeeffc319760dbd45c91b63de053afe6'
                        key: {
                            sys_ui_section: {
                                id: 'a6effc319760dbd45c91b63de053afd2'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'aeeffc319760dbd45c91b63de053aff8'
                        key: {
                            sys_ui_form: {
                                id: '16effc319760dbd45c91b63de053af9a'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'a6effc319760dbd45c91b63de053afd2'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af09368db4ca4b208175e1fa1310ac96'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'opm_decision_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'af62b91d30044893931af0fbe14f8c15'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_fund_src_1'
                            value: 'general_revenue'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'af8458b836934bd5aff318a5961c02b1'
                        key: {
                            sys_security_acl: '2d2bfa7ecae04d409fad79e7967e3fa5'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af9714b70e93477eaeac91cb4e225724'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'business_area'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'afe78bb538744d90ac42481142aafc88'
                        key: {
                            document_key: 'fc80402e77834910ac4efdf3f3dd6709'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aff9b39e437047388d46b5d38297c85f'
                        key: {
                            sys_ui_section: {
                                id: '510fc737ea3b47df92c8a5954755f35e'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Workforce Data'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'affd1bea17974e58ac729bd05705fa02'
                        key: {
                            document_key: 'e60435768b404a0f97553136636a8024'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b013e5711b634cf68c401f634c976831'
                        key: {
                            id: '9b1bdab7f6584729ae3809d69c2ecf78'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b0257c72527340d09e6c3c44dc3a75c2'
                        key: {
                            document_key: '473a7ba95d224dd585a0102ab64a7423'
                            variable: 'b27b2b29ff6033008d3f5d9ad53bf164'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b06d57b538c447569e97e16874e6cb33'
                        key: {
                            name: 'var__m_sys_hub_action_output_4e1251c2235d4d28b28f86c4b58deab5'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b0ad36b2713d4353a02d658ab748038c'
                        key: {
                            sys_security_acl: 'f5107296a9d24a3ba85cf82f79b6ce42'
                            sys_user_role: {
                                id: 'bad98a5dad3e4fb9b7cba80f590aa614'
                                key: {
                                    name: 'x_snc_sas_positi_0.committee'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b0c91416776949dd9e729a726821bcaa'
                        key: {
                            id: '4115562f58cb41309eaf374d82137410'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b1171971aa2f4b0d8a117906a83bbb5f'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'row_count'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b12d6c9886a046bbaf5041dcd9efa11f'
                        key: {
                            name: 'var__m_sys_hub_action_input_fed85ed115a54408852597482a71c3aa'
                            element: 'department_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b19c23f38a7f4c14943cc18c571916c2'
                        key: {
                            document_key: '7b02acd66cb947899b84fe455b8b9100'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b1a2b8483b2c4278bdfe70bed2f831f0'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: '091e9aeac7e60010bfbaf89f51c260ea'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b1ccc319764648daa8cb9c0a509dec97'
                        key: {
                            id: '2dda10504e464176a36a179d6f7d2514'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'is_automated'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: 'b29e6e21cd3d40a896a09fcebcf08c4e'
                        key: {
                            model: '874e7068fbfd434e9fe0a72f3cb7ff0a'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b2b6ad8e9ae14159bed8aa7b401fd9db'
                        key: {
                            document_key: '1f0c54535e16496ebdccde97e6b853f6'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b2bd4812222444ca94951593814b86fb'
                        key: {
                            sys_security_acl: '3f8600f7f8b94320b563d0d2ff2e0da9'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'b2ef70719760dbd45c91b63de053afba'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'sn_gsm_government_service_task'
                            view: {
                                id: 'e5d670f6773c7110f94fc35b8c5a9932'
                                key: {
                                    name: 'playbookapproval'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b2f0a16ab7d245c9a970f26b07f7e689'
                        key: {
                            document_key: 'f749db0c4961417caef370d8e3453a38'
                            variable: 'a532d26fde6d44eeaf7a6d4d24a1fe3d'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'b32744c513584bbab91cd51e784ead60'
                        key: {
                            question: '065d38bbf411471f8409bde6642da1aa'
                            value: 'transfer'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'b33405fd9760dbd45c91b63de053afb8'
                        key: {
                            id: '76ba36ade7a04797b32daf39d8ffead8'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b3bee0f2ffb1472eb7c18a7fd576319c'
                        key: {
                            document_key: '7b02acd66cb947899b84fe455b8b9100'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3e18778d774405280e2d98dfd15aa0e'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'director_certified_on'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b462dc0ca27f41158af55eb47e7aa067'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_org_chart_verified'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b5254d78a6fb4e9c9c0e1f0ff000c159'
                        key: {
                            document_key: '9179ef7f351a48b6a83fa37ba5625a36'
                            variable: '98c44875ffa033008d3f5d9ad53bf1fa'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b5413c35367f44c8b43c5069a343ec3a'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'b56db05d705c4737a5b70a92d15c7fae'
                        key: {
                            role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                            contains: {
                                id: '2b2ddd98bd864e0a8d50f609d55ca7e2'
                                key: {
                                    name: 'x_snc_sas_positi_0.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'b5e74ea5abef43bd97e7b3f1de9b7372'
                        key: {
                            category: 'x_snc_sas_positi_0_case'
                            prefix: 'ITF'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b646ffdc14ee4a3bb0bd908a9a649f07'
                        key: {
                            document_key: '029b6913dbf74698a0f6606c43053d29'
                            variable: '3499c6631b630010affd0e55cc4bcb90'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b6b43da2a0d34a61ae34529f6668ad90'
                        key: {
                            sys_ui_section: {
                                id: '1e645db421b84e01bff3ac57ded4bede'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Funding'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b6c109829a894983a45909fa9c0924d1'
                        key: {
                            document_key: 'e60435768b404a0f97553136636a8024'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b6c9af6c52c74ec88df97d4f2f60ae97'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'table'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b700e7422410424a8228acef2d00211d'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_filled_count'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b7246144132d491f9cea1f5abd5ce50e'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_request_info_start'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b73b12185ddb4b2082d4d7057c59fc6d'
                        key: {
                            id: '0006de7a35ef4ce89a9123f432c40783'
                            table: 'var__m_sys_pd_activity_type_prop_dc6459fbff001010393e53bd6338f1cb'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b73fd80ae61848758153e8b87f09abe6'
                        key: {
                            id: '2dda10504e464176a36a179d6f7d2514'
                            table: 'var__m_sys_hub_flow_input_2b8b42e31b630010affd0e55cc4bcbe9'
                            field: 'wait'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'b7721cf197689bd45c91b63de053afae'
                        key: {
                            model: '3f721cf197689bd45c91b63de053afab'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'b79fe42b981048ed9ceed577029b212f'
                        key: {
                            name: 'x_snc_sas_positi_0_job_req'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b7da0c1beb5f46d1b8637cd7c35557c0'
                        key: {
                            sys_security_acl: '7182583bea424428882fa5d0e1b2a4fe'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'b7f008d1b71d42a3bff1f792459969d3'
                        key: {
                            model: '4e1251c2235d4d28b28f86c4b58deab5'
                            element: 'meeting_date'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b8cf3b5696354cd2b048ef30512ffc2a'
                        key: {
                            id: '220401ea2994417aa81b58c360d16ecb'
                            table: 'var__m_sys_hub_flow_input_2b8b42e31b630010affd0e55cc4bcbe9'
                            field: 'wait'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b8fc741ef42d42d8b9782b827b1799d5'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b8fd69a5a28446469c403f0e7316b5d3'
                        key: {
                            id: '2d362e4001784e2a847b6d64fac16074'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b90b4e70d9904ca6b5044f4657a02bdb'
                        key: {
                            document_key: 'e1de4656d2984d59a1d8451573038f83'
                            variable: '736b784a8c564b60947b631109a186c8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b91790ed0ea442a68fed31f71a4a99ff'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_basis'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b92244f1e9a2452fbc41b04c30bcdb1f'
                        key: {
                            name: 'var__m_sys_hub_flow_output_312a6676ff8a49bb87cac61b44bdd7f6'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b98b7f8f08834047893713a18be45b7c'
                        key: {
                            logical_table_name: 'x_snc_sas_positi_0_classification'
                            col_name_string: 'class_code'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b995bde131b94050b8e229082c4dac30'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b9f4697c721c4d5d8c7be92de6a49864'
                        key: {
                            sys_security_acl: 'af73ed1423ed447b966778a7c4d778f3'
                            sys_user_role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba1cdb7a8d774a0c8eeb343b2e7ea9bb'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacated_by_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba2e21ad7c4942f1963bbe05e670f9a7'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'positions_authorized'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'bad98a5dad3e4fb9b7cba80f590aa614'
                        key: {
                            name: 'x_snc_sas_positi_0.committee'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'bae6192d078840ab9110b898f307f246'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_fund_pct_2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bb05cd2698e44370858c50d6fea49635'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            value: 'awaiting_certification'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bb1d089e0f3245dbb7dd36d06e16311e'
                        key: {
                            document_key: 'd9938bb6667c429c8c967e2ce0c9052f'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bb2501f0b6eb409a9ac8dd4f76cf866b'
                        key: {
                            sys_security_acl: '7adefe80940d42909df1f0281c98e6a9'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bb5043939e3447bcb9b996d627c08a5f'
                        key: {
                            document_key: '1e653f76d6af457ea00ee1885550e750'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bbb26fe7448e486ba4981974adb49a9d'
                        key: {
                            document_key: '8d7d63d54e504c73a45cc65a68015d56'
                            variable: '736b784a8c564b60947b631109a186c8'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'bc0a9d7f96a64f0eaf05bd25d311103b'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_hub_flow_input_8ec899171b934150db4bba63cc4bcb22'
                            field: 'record'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'bc56d1877f0b4ec181f69ac8c2f52f28'
                        key: {
                            id: '8668824cf52647e48b2074cec54f4a1b'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: 'bc6258b197689bd45c91b63de053af69'
                        key: {
                            model: '786258b197689bd45c91b63de053af1e'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'bc9447c3501e43ab9cd74b57302d95e2'
                        key: {
                            model: 'ace0bfa0c29c46d2831f2d3af2e375cf'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd5316875fd442928770a87de729ca9f'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bdcef0e33da643919043cd12599b72de'
                        key: {
                            sys_ui_section: {
                                id: 'a0700e8c5c614fb79367e7bb27d8ef11'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Candidate Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_requested_salary'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'bde0a890b17545ac93b38b980e07e53b'
                        key: {
                            id: '2d362e4001784e2a847b6d64fac16074'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'title'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'be248b51a32a4ed4943b247739fec880'
                        key: {
                            question: '065d38bbf411471f8409bde6642da1aa'
                            value: 'retirement'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'be2cf6df392a43e88a81d54d0670417d'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: 'be5290b197689bd45c91b63de053af15'
                        key: {
                            action_type_id: '6e5250b197689bd45c91b63de053af62'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be82143597689bd45c91b63de053afd5'
                        key: {
                            name: 'var__m_sys_hub_flow_input_ba82143597689bd45c91b63de053afc6'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'be9c2e91fe314b11a6545a4de39d3ecd'
                        key: {
                            sys_ui_section: {
                                id: 'a0700e8c5c614fb79367e7bb27d8ef11'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Candidate Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_current_salary'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'beef70719760dbd45c91b63de053afd6'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'beef70719760dbd45c91b63de053afd7'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'beef70719760dbd45c91b63de053afd8'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'beef70719760dbd45c91b63de053afd9'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'beef70719760dbd45c91b63de053afda'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'beef70719760dbd45c91b63de053afdb'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'beef70719760dbd45c91b63de053afdc'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'beef70719760dbd45c91b63de053affe'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'b6ef70719760dbd45c91b63de053affd'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'beef70719760dbd45c91b63de053afff'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'visible_to_customer'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'beefb0719760dbd45c91b63de053af00'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'beefb0719760dbd45c91b63de053af01'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes_list'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'bf257d5e7ca442458b293ebdaf919b32'
                        deleted: false
                        key: {
                            ui_policy: '44f670f5be5049a78b80f6a667643b08'
                            field: 'u_opm_comments'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'bf3405fd9760dbd45c91b63de053afb6'
                        key: {
                            id: '76ba36ade7a04797b32daf39d8ffead8'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bf5f3be4a155404785e969bf28dab309'
                        key: {
                            document_key: '029b6913dbf74698a0f6606c43053d29'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bf616a300cd949bba55baba351ad2322'
                        key: {
                            sys_ui_section: {
                                id: '5c5795a9d90e4faa95915618d3308b04'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Vacancy Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_vacated_by'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bf625514e8e649308ccac5cea3ccbbd8'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_exemption_reason'
                            value: 'ist12_plus'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'bf721cf197689bd45c91b63de053afca'
                        key: {
                            model: '3f721cf197689bd45c91b63de053afab'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bff8f1e12d0e4de3bbd54f80310e2326'
                        key: {
                            document_key: '807b0634bd944d69951e9fe1cf3f2e81'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c01de0235359414aac86d070e395854b'
                        key: {
                            id: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c024f1fb499a4b829998e723af7272cc'
                        key: {
                            id: 'c7d96757741e42359ba3d689bd97f494'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c03e8a894adf45eb8960fad097d68974'
                        key: {
                            document_key: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'c04405fd9760dbd45c91b63de053afdd'
                        key: {
                            id: '7ad6fe1a77cb430e8ac1cc181fae0cd2'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'c04445fd9760dbd45c91b63de053af20'
                        key: {
                            id: '867820160876421b836e44ca6f2941e3'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c0521d462b681fd0b7b1f93a5e91bf91'
                        key: {
                            name: 'var__m_sys_pd_snapshot_input_00521d462b681fd0b7b1f93a5e91bf3a'
                            element: 'parent_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'c06294b197689bd45c91b63de053af5e'
                        key: {
                            model: '735254b197689bd45c91b63de053af9d'
                            element: 'error'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c06294b197689bd45c91b63de053af64'
                        key: {
                            name: 'var__m_sys_hub_action_output_735254b197689bd45c91b63de053af9d'
                            element: 'error'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c16ff3c2147b4ec1b27123d3c582d4d3'
                        key: {
                            id: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_checklist'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c185b0d880364678a0ab9cb6aff931b5'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c18f579a35a04bfe8c77c89d043b5f80'
                        key: {
                            document_key: '09f943cf48f846b299d9f1d9cfa65a45'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c2641801395842f78a600e1f5335a8b4'
                        key: {
                            name: 'var__m_sys_hub_flow_output_625966fabf1241188c90384112c820a5'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c29a92bac54b48c9b3d5b6b75bdafabf'
                        key: {
                            id: '1e653f76d6af457ea00ee1885550e750'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c2ff7fcc9766495987ba9b4cf5ba4d0a'
                        key: {
                            document_key: '807b0634bd944d69951e9fe1cf3f2e81'
                            variable: 'd803775a5b01001031a67d6f7281c7aa'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c353d14a676d4fedb1cb3d45fb9f46a0'
                        key: {
                            document_key: 'dc6d40bdcccf4dd4b3be966bf8efc32c'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'c364097e9fe542f4a0145adf7bc1abeb'
                        key: {
                            model: 'fed85ed115a54408852597482a71c3aa'
                            element: 'group'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c36fed6eca784debbc7a75e59dddf79c'
                        key: {
                            document_key: '2dda10504e464176a36a179d6f7d2514'
                            variable: '267e68875b00001070e4492c11f91a34'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c38b3bcd0e9b4ad19372de1cd46d0568'
                        key: {
                            document_key: '05fb75b0578c424f9f7556ce9e827cb3'
                            variable: '0f4e18f6c7ad5110bfbaf89f51c260f0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c3e6dfd7327343948aec20aadfcbb8cb'
                        key: {
                            name: 'var__m_sys_hub_flow_input_2e1648ecd23b45deaf4ebefc7ecb5a1b'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c4000d6625274fcb8df4f6539a93a9ea'
                        key: {
                            name: 'var__m_sys_hub_flow_input_7370b74da3334152a795ea48d819b8e8'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'c44405fd9760dbd45c91b63de053afde'
                        key: {
                            id: '7ad6fe1a77cb430e8ac1cc181fae0cd2'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'c44445fd9760dbd45c91b63de053af21'
                        key: {
                            id: '867820160876421b836e44ca6f2941e3'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'c44d6464738c44b58330b5f06c6af103'
                        deleted: true
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c46294b197689bd45c91b63de053af25'
                        key: {
                            name: 'var__m_sys_hub_action_output_735254b197689bd45c91b63de053af9d'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c47332d333b84e92b9c24e63664b770c'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'minimum_qualifications'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c4bcf0759720dbd45c91b63de053af62'
                        key: {
                            name: 'var__m_sys_pd_snapshot_input_80bcf0759720dbd45c91b63de053af0b'
                            element: 'parent_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c4c1fa01a7c943c1898dcbf67da5fcce'
                        key: {
                            document_key: '43334d404da048049e5bb90b26f4a362'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c4c417f7a69141b2af3e26c1f4a89e42'
                        key: {
                            document_key: 'c7d96757741e42359ba3d689bd97f494'
                            variable: '55628762c3211010381b60bc0eba8fec'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c4d0a94e05574a1bb6119648fe96d324'
                        key: {
                            sys_security_acl: 'ec3350a0b5be4458829ae91a5a50ac15'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c4deee93a59b4c03a104ab51fa939f00'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_vacated_by'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c512f100ab1646bb96977fc5d09e7946'
                        key: {
                            document_key: '8668824cf52647e48b2074cec54f4a1b'
                            variable: 'd803775a5b01001031a67d6f7281c7aa'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c5146e16cecc4fc5b81b47d6065dbd9c'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'funding_source'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'c51d7816031f46dcac6b19a6c12d37b4'
                        key: {
                            sys_ui_form: {
                                id: '7e608a9cb7a941b38efcce7f25217de8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '5c5795a9d90e4faa95915618d3308b04'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Vacancy Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c51dbe69cd7b48ae824385fd00dc77ff'
                        key: {
                            id: '807b0634bd944d69951e9fe1cf3f2e81'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_checklist'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c56cbc9fdc7b4477b8611ea2f439830f'
                        key: {
                            id: '4115562f58cb41309eaf374d82137410'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c58e9f3939d34cfe97d6fffcbc10fab1'
                        key: {
                            document_key: '9b1bdab7f6584729ae3809d69c2ecf78'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c60c8bbec69b4798a14054b074fb54e1'
                        key: {
                            id: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'c63b47d5329e4b1a90a49e0fe70cabd9'
                        key: {
                            model: '874e7068fbfd434e9fe0a72f3cb7ff0a'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c64596df249744f68e6cdfdd337567e1'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'position_responsibilities'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c6a7f4e11d9f47caae641bc1e603f4cb'
                        key: {
                            document_key: '220401ea2994417aa81b58c360d16ecb'
                            variable: '49ed24875b00001070e4492c11f91aa5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c71b3a0ed35246b69bb64f1340dbfd11'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c75290b197689bd45c91b63de053aff8'
                        key: {
                            name: 'var__m_sys_hub_action_output_b65290b197689bd45c91b63de053afc8'
                            element: 'meeting_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: 'c752d0b197689bd45c91b63de053af26'
                        key: {
                            action_type_id: 'b65290b197689bd45c91b63de053afc8'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c7abb40128694deab415eaf1e9550a5a'
                        key: {
                            sys_security_acl: 'd5537082afce49b6bfc2378234c03dd7'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c7b158c909934757a98bcf22e0be165b'
                        key: {
                            sys_ui_section: {
                                id: '1e645db421b84e01bff3ac57ded4bede'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Funding'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c7b70e07d4bc4f67bb88eeaaf99cccfe'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'personnel_action'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c7c0ef1a93a84bbbb41520b141ba536c'
                        key: {
                            id: '70836464d5914ecc9854df38763f8569'
                            table: 'var__m_atf_input_variable_071ee5b253331200040729cac2dc348d'
                            field: 'user'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c7e9850d853c4a41bb56342f2e5dadfc'
                        key: {
                            id: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c804d08319bc4f4b9c6ce1ab93995aad'
                        key: {
                            document_key: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            caption: 'Request Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c8280f3d67d8497fad06fd9d484cf89d'
                        key: {
                            sys_security_acl: '7ad8a81919904772b2db8d5650e47f98'
                            sys_user_role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c86f1456669a406d8dff404688401aa3'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_exemption_reason'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c86f89f229fa4f63b3d0b99a7bf35d30'
                        key: {
                            id: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c8ea95ef86034dbbbce4a0150dc80390'
                        key: {
                            id: '807b0634bd944d69951e9fe1cf3f2e81'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c90bba89ec0403108bb2d76241880cce'
                        key: {
                            name: 'service_offering'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c92d914f8df04801b72cbb6bec481b5f'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'offset_position_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c93392b62c4b48e4a77d0ddbe804eaf6'
                        key: {
                            document_key: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c9f05823528847c985370cb0237a0926'
                        key: {
                            id: '029b6913dbf74698a0f6606c43053d29'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ca1c3e72e43447feba3f8a746bd0e469'
                        key: {
                            id: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ca1fc443382746759e7215ee72b72734'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_business_days'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca385c3974d14140afdec22230d6786e'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'pay_table'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ca3b7e16741942b2850e647863c3f4ef'
                        key: {
                            document_key: 'fe6b0faf01664ca99d417bea0c03be98'
                            variable: '68ae353cbe8441d0bf0d89c701dbb029'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ca6fc86c22284c7e8a876310fc0cb28b'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'hiring_freeze_exempt'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'ca82d03597689bd45c91b63de053af39'
                        key: {
                            model: '8a82d03597689bd45c91b63de053af2a'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ca892f7c51b949a1a5fc8ad5331d1fe5'
                        key: {
                            document_key: '2d362e4001784e2a847b6d64fac16074'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cab566cf110b4f9c8a170a56f8340a5c'
                        key: {
                            document_key: '029b6913dbf74698a0f6606c43053d29'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cadaa5b22ac742e3b905c74c80a19c68'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'positions_filled'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cb0cdb2d724343b3ad21d8727f7dcdb4'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_basis'
                            value: 'intent_to_fill'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cb264b69889a40eca2e7e3fd0603b9b6'
                        key: {
                            document_key: '43334d404da048049e5bb90b26f4a362'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb5290b197689bd45c91b63de053afe1'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_075290b197689bd45c91b63de053afd4'
                            element: 'meeting_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cb615878bdc94124bd9e356b95d10314'
                        key: {
                            document_key: 'e6728198f65942229535b889f83873b0'
                            variable: '1985e0ceff2433008d3f5d9ad53bf1ba'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'cb7298f197689bd45c91b63de053af8e'
                        key: {
                            model: '8f7298f197689bd45c91b63de053af7a'
                            element: 'decision'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cb7eccd79bb04d028953c9a027f9541c'
                        key: {
                            document_key: '473a7ba95d224dd585a0102ab64a7423'
                            variable: '8c07aba5ff6033008d3f5d9ad53bf13b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cba8dc692f914e2c9e253889264e9968'
                        key: {
                            document_key: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'cbaab0a17be14a91af82e96bf797423a'
                        key: {
                            sys_ui_form: {
                                id: '7e608a9cb7a941b38efcce7f25217de8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '510fc737ea3b47df92c8a5954755f35e'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Workforce Data'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cbed4fecbb124597881702802ec2d249'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'requisition_acknowledged_on'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'cc6294b197689bd45c91b63de053afac'
                        key: {
                            id: '735254b197689bd45c91b63de053af9d'
                            table: 'var__m_sys_hub_action_output_735254b197689bd45c91b63de053af9d'
                            field: 'error'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cc827adfc27a49fa91d73ec0879f5178'
                        key: {
                            document_key: '2dda10504e464176a36a179d6f7d2514'
                            variable: '24bdf44673030010fe4a6da44cf6a707'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cc86ae5d140b4271b071c692548bb927'
                        key: {
                            document_key: '12dca8870c744c49b8f5e4b2c5415e94'
                            variable: '1778a7480f20101091d0f00c97767e03'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cd414ae275b14394bb51a1908152297f'
                        key: {
                            document_key: 'f0ab8782f3b9463daf307ab59a864433'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'cd5589b197a0dbd45c91b63de053af5a'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'footer'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'cd5589b197a0dbd45c91b63de053af5d'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'pending_title'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'cd9a1ec2c822402a91fb55d9ee68d3c1'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'columns'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'ce01c9bedeae4189b889ab65d649f06e'
                        key: {
                            question: '01e81f707d8c4533be5301e34128ace7'
                            value: 'cash'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ce1aa1683b3b48c6a10b0f8544541bec'
                        key: {
                            name: 'var__m_sys_hub_action_output_f33477e70d09408ca4110f327692afb8'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ce3c920ac96e49bc85e5ab39b6c0154a'
                        key: {
                            document_key: '4115562f58cb41309eaf374d82137410'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ce53603709a147f29e0ce7b3854f270d'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_exemption_reason'
                            value: 'extra_help'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ce661c64603845ea8304d53d9e21c45b'
                        key: {
                            id: '029b6913dbf74698a0f6606c43053d29'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'title'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'ce7d1f55dcee451fa2c5b49fb020e523'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_turnover_rate'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cedc7052c10f4dffa572dcf53fefc6d8'
                        key: {
                            document_key: 'e2293ac289854a21948615370aefdd63'
                            variable: '5c5f3949ffb332109267ffffffffffef'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'cedee5775f9848d1bff2241a2766fa57'
                        key: {
                            id: '807b0634bd944d69951e9fe1cf3f2e81'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cf5290b197689bd45c91b63de053afec'
                        key: {
                            document_key: '075290b197689bd45c91b63de053afd4'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cf55ebc27d234ddf969c48ed20a83819'
                        key: {
                            document_key: '2d362e4001784e2a847b6d64fac16074'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cf5e95246b244b4fbff2859942ab6a56'
                        key: {
                            document_key: '8668824cf52647e48b2074cec54f4a1b'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf89d0466281412190bfed00832a071a'
                        key: {
                            name: 'var__m_sys_hub_action_output_fed85ed115a54408852597482a71c3aa'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cf9c498224dc4c4fa77998402c1a56e2'
                        key: {
                            document_key: '5c8e2290804545679d5b960641c4e408'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cfbc195b29084f7a9b88abd63fce4ed7'
                        key: {
                            sys_security_acl: '3f8600f7f8b94320b563d0d2ff2e0da9'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cfdee6655e87433497a9aeb3ba243cbe'
                        key: {
                            document_key: '8668824cf52647e48b2074cec54f4a1b'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'd04445fd9760dbd45c91b63de053aff5'
                        key: {
                            id: 'b7246144132d491f9cea1f5abd5ce50e'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd0b364ac46af4fa187865b7473ae078a'
                        key: {
                            sys_security_acl: '951bdd2f69164f99ace3913be3ba6f4d'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0c4143a278547aa8aa8f1911c06cbe5'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'candidate_personnel_number'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd0e1bb166b4a4f5dbfa44bee67b96f5f'
                        key: {
                            document_key: '029b6913dbf74698a0f6606c43053d29'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd12a27ef9c4b4fd08ddd5c9764faf3e8'
                        key: {
                            document_key: '8005f75fa8984c94b5713a3d3f695a9c'
                            variable: 'd18061f287d300102252c88fc0e3eccb'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd12cde4170af47eda2c4e428823184fc'
                        key: {
                            sys_ui_section: {
                                id: 'a0700e8c5c614fb79367e7bb27d8ef11'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Candidate Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_current_grade'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd165f4025fa94b92987d365ab861ef9c'
                        key: {
                            sys_ui_section: {
                                id: '1e645db421b84e01bff3ac57ded4bede'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Funding'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_fund_pct_2'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd16c95642bac1f90b7b1f93a5e91bf56'
                        key: {
                            sys_ui_section: {
                                id: '035c916497a45f945c91b63de053af72'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'comments'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd182f622d88c4ad3b5df5214bd4775f8'
                        key: {
                            document_key: '3d321a3e935c41df8a12c98d27b6d15f'
                            variable: 'f62d06e222144a8abfd7e0678fbc27fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd1e8436245a8435cb826bb84d431eb83'
                        key: {
                            document_key: '5c8e2290804545679d5b960641c4e408'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd1f2821c3c544eaab33cf0b05f1b1187'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd22e958daa8542039701e4ae8b9c3333'
                        key: {
                            id: '4115562f58cb41309eaf374d82137410'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd2a4df985257490d954f0382ff6e53e9'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd2b5f1c204b94ce882781a066319b0b4'
                        key: {
                            id: '807b0634bd944d69951e9fe1cf3f2e81'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd2c31717561f4f46b92d1ca7c6491c8c'
                        key: {
                            sys_security_acl: 'd7a1f3443bc74477906d5d2970265b68'
                            sys_user_role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2e29d5c382a44bea7bc847e504ea7cc'
                        key: {
                            name: 'service_offering'
                            element: 'x_snc_sas_positi_0_u_annual_cost_avoided'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd2efbc319760dbd45c91b63de053af1a'
                        key: {
                            sys_ui_section: {
                                id: '8aefbc319760dbd45c91b63de053af16'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'sn_gsm_government_service_task'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd300d207ecca45f1a51682c832e24623'
                        key: {
                            name: 'var__m_sys_hub_action_output_f33477e70d09408ca4110f327692afb8'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd3088dd36015449bb9331d0f9e061fad'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'job_title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'd334c1fd9760dbd45c91b63de053af55'
                        key: {
                            id: '06009a457ce440429dd3bceb95122f2f'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'd35a8a381df64839b138300aab6543d8'
                        key: {
                            sys_ui_form: {
                                id: '7e608a9cb7a941b38efcce7f25217de8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'f6a85aa2900446eaa7cbdb89061e2be8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Committee / OPM Decision'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd3f181ce624c4b2d867b1f1f41f0f0ff'
                        key: {
                            question: 'f003b637323e41cf93e748069646804e'
                            value: 'unbudgeted'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd48731ee00e04a4cb807ce9480256929'
                        key: {
                            document_key: 'bf4990c5bc974603ad9d7f8f6d35f983'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd4f1747e60bb4c808b08e0606f0ba818'
                        key: {
                            document_key: '9179ef7f351a48b6a83fa37ba5625a36'
                            variable: '1985e0ceff2433008d3f5d9ad53bf1ba'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd50fe39e360a47e3808633c1f069c43d'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd520569be8974af8a33f29bcd9d169eb'
                        key: {
                            id: 'fed85ed115a54408852597482a71c3aa'
                            table: 'var__m_sys_hub_action_output_fed85ed115a54408852597482a71c3aa'
                            field: 'analyst'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd54a29c5551240248a26a9fe0004f022'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_fund_src_2'
                            value: 'special_revenue'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd5517caf727a458d8df5287757651b12'
                        key: {
                            document_key: '807b0634bd944d69951e9fe1cf3f2e81'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd55bdd3de4d84ea7aeeed7814e4e0472'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_exemption_reason'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'd652470a05004600a08dc1ca425d05a0'
                        key: {
                            model: 'f33477e70d09408ca4110f327692afb8'
                            element: 'case_sys_id'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd6b78388825e475ab318efdcebb474b9'
                        key: {
                            question: '01e81f707d8c4533be5301e34128ace7'
                            value: 'special_revenue'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd6bd8ac10e3a46cd8002d5943c0e6bd0'
                        key: {
                            id: '7b02acd66cb947899b84fe455b8b9100'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd6c28da48c8540de8eb5c6b7b149ce1a'
                        key: {
                            document_key: '807b0634bd944d69951e9fe1cf3f2e81'
                            variable: '54c49bc60f3200102920c912d4767ee2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd6ea609409cf484bb2efe94858c90e4c'
                        key: {
                            id: '2dda10504e464176a36a179d6f7d2514'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'tagline'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6effc319760dbd45c91b63de053af29'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6effc319760dbd45c91b63de053af2a'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6effc319760dbd45c91b63de053af2b'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6effc319760dbd45c91b63de053af2c'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6effc319760dbd45c91b63de053af2d'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'account'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6effc319760dbd45c91b63de053af2e'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6effc319760dbd45c91b63de053af2f'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent_case'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6effc319760dbd45c91b63de053af30'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6effc319760dbd45c91b63de053af31'
                        key: {
                            sys_ui_section: {
                                id: '92effc319760dbd45c91b63de053af1f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'consumer'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd724ad46bf0345bd9e43da70cec2fcb7'
                        key: {
                            document_key: '2dda10504e464176a36a179d6f7d2514'
                            variable: 'ec5d96eac7e60010bfbaf89f51c2605d'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd730c92e9efa4eb2ae510caded36b82b'
                        key: {
                            sys_security_acl: '6482254b7bc14477b2510a15779068b2'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'd734c1fd9760dbd45c91b63de053af56'
                        key: {
                            id: '06009a457ce440429dd3bceb95122f2f'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'd734c1fd9760dbd45c91b63de053af66'
                        key: {
                            id: '0823d6f3534b4b068b4082aa1d9c7751'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd736097597a0dbd45c91b63de053af07'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: 'fbc1f11b5b40001070e4492c11f91a45'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd74a3fa3125647a7a64b41945f2b6adc'
                        key: {
                            sys_ui_section: {
                                id: '5c5795a9d90e4faa95915618d3308b04'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Vacancy Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_date_vacated'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd7566c6ce54d45dea67e343acc4ba012'
                        key: {
                            document_key: 'f0ab8782f3b9463daf307ab59a864433'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd777b83862c1456c8b44fedc58ad4c37'
                        key: {
                            id: '8668824cf52647e48b2074cec54f4a1b'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd7afaf28add5435a926d9809afbba072'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'candidate_personnel_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd7bf14ff0e4942ec83e1cf77ecf6b44a'
                        key: {
                            document_key: '19bd5ccad4f2449786af9003457d1c5a'
                            variable: '074e5876c7ad5110bfbaf89f51c26087'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd8028f90607f43f0824dc2ac16e59ed8'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_basis'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd8302f3b65c443139bce0d4ac7a9e191'
                        key: {
                            document_key: '473a7ba95d224dd585a0102ab64a7423'
                            variable: '6f69fc4aff6433008d3f5d9ad53bf18c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd8380be8b0054c19b0e7d7ffdd9db004'
                        key: {
                            document_key: 'e2293ac289854a21948615370aefdd63'
                            variable: '7480c46d375403109267bac734924b4c'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'd84485fd9760dbd45c91b63de053af26'
                        key: {
                            id: 'ce7d1f55dcee451fa2c5b49fb020e523'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd85c89b0a1db469fbc1cd0139ef753cc'
                        key: {
                            name: 'var__m_sys_hub_flow_input_ec9aa9fcab5f48e4894d649302f8b0bf'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd8bd829c09114842aa0157ddedef873e'
                        key: {
                            sys_security_acl: '7adefe80940d42909df1f0281c98e6a9'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd8d82963892442598718fe27805b0b61'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacancy_reason'
                            value: 'termination'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'd8de4c22707a471eb6298d1c3471c73e'
                        key: {
                            model: 'fed85ed115a54408852597482a71c3aa'
                            element: 'error'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd8eb804674f348b3a87b90cd8d9df8ed'
                        key: {
                            document_key: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            variable: '8cfe36a7c3611010381b60bc0eba8fd2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd928d255c4d4450f9cd35e4cf39bee49'
                        key: {
                            id: '8668824cf52647e48b2074cec54f4a1b'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd972ea01857c48a88cd4014e6cb6c389'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_checklist'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd992751c187f41e4b50321a34429dbb2'
                        key: {
                            document_key: '0006de7a35ef4ce89a9123f432c40783'
                            variable: 'fc64d9fbff001010393e53bd6338f10d'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd998c41dadec4004bcaff443a4cb1f57'
                        key: {
                            document_key: '26d4e928d1574d8d813f960bbeb6f8f7'
                            variable: '6f69fc4aff6433008d3f5d9ad53bf18c'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'd99fc2cc184a4da4bc35a7cc39814025'
                        key: {
                            model: '7eb1d0a3a8f0489c9af271c5b2952fe1'
                            element: 'error'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd9bb074a567943c9a2cae0dc31670cba'
                        key: {
                            document_key: '220401ea2994417aa81b58c360d16ecb'
                            variable: 'eb0474b8c763001085f5532bb4c260f5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd9bdfb1b12a44c43b0348b183c143b48'
                        key: {
                            document_key: '1e653f76d6af457ea00ee1885550e750'
                            variable: 'd803775a5b01001031a67d6f7281c7aa'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'da5924810243476b919ee5ed4537d32e'
                        key: {
                            id: '9b1bdab7f6584729ae3809d69c2ecf78'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'dae695a27f04461792343a7d804612fa'
                        key: {
                            question: '01e81f707d8c4533be5301e34128ace7'
                            value: 'federal'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daefbc319760dbd45c91b63de053af1b'
                        key: {
                            sys_ui_section: {
                                id: '8aefbc319760dbd45c91b63de053af16'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'sn_gsm_government_service_task'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daefbc319760dbd45c91b63de053af1c'
                        key: {
                            sys_ui_section: {
                                id: '8aefbc319760dbd45c91b63de053af16'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'sn_gsm_government_service_task'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'proposed_decision'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daefbc319760dbd45c91b63de053af1d'
                        key: {
                            sys_ui_section: {
                                id: '8aefbc319760dbd45c91b63de053af16'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'sn_gsm_government_service_task'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daefbc319760dbd45c91b63de053af1e'
                        key: {
                            sys_ui_section: {
                                id: '8aefbc319760dbd45c91b63de053af16'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'sn_gsm_government_service_task'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daefbc319760dbd45c91b63de053af1f'
                        key: {
                            sys_ui_section: {
                                id: '8aefbc319760dbd45c91b63de053af16'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'sn_gsm_government_service_task'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'daefbc319760dbd45c91b63de053af4b'
                        key: {
                            sys_ui_form: {
                                id: '8aef3c319760dbd45c91b63de053af8d'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '1eefbc319760dbd45c91b63de053af32'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd58d1516771042103b35bfa64b5a995e'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daeffc319760dbd45c91b63de053af0c'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent_case'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daeffc319760dbd45c91b63de053af0d'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daeffc319760dbd45c91b63de053af0e'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'consumer'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daeffc319760dbd45c91b63de053af0f'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daeffc319760dbd45c91b63de053af10'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daeffc319760dbd45c91b63de053af11'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'contact'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daeffc319760dbd45c91b63de053af12'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'proposed_decision'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daeffc319760dbd45c91b63de053af13'
                        key: {
                            sys_ui_section: {
                                id: '5aefbc319760dbd45c91b63de053af73'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'daeffc319760dbd45c91b63de053af8c'
                        key: {
                            sys_ui_form: {
                                id: '16efbc319760dbd45c91b63de053af6e'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '1eeffc319760dbd45c91b63de053af5a'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db2e7a13c5fd40b083fb9b40747f4de6'
                        key: {
                            name: 'var__m_sys_hub_flow_input_ace0bfa0c29c46d2831f2d3af2e375cf'
                            element: 'activity_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'db34c1fd9760dbd45c91b63de053af67'
                        key: {
                            id: '0823d6f3534b4b068b4082aa1d9c7751'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db5214b197689bd45c91b63de053af3d'
                        key: {
                            name: 'var__m_sys_hub_action_input_1f5214b197689bd45c91b63de053af0b'
                            element: 'case_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'db877a7958214f188969b26fbfdca848'
                        key: {
                            id: 'fed85ed115a54408852597482a71c3aa'
                            table: 'var__m_sys_hub_action_output_fed85ed115a54408852597482a71c3aa'
                            field: 'group'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'db8a8eaaae034f7aaf91933002dc9905'
                        key: {
                            document_key: '2d362e4001784e2a847b6d64fac16074'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'dc4445fd9760dbd45c91b63de053aff3'
                        key: {
                            id: 'b7246144132d491f9cea1f5abd5ce50e'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'dc4485fd9760dbd45c91b63de053af27'
                        key: {
                            id: 'ce7d1f55dcee451fa2c5b49fb020e523'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'dc56d3e529734e42a9852ea20a574160'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            caption: 'Justification'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dc57fe04867a43c78fdb50a896167d75'
                        key: {
                            document_key: 'c7d96757741e42359ba3d689bd97f494'
                            variable: '78f334b8c763001085f5532bb4c26009'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'dc6b5d44043e4ebfbbc306e6862ed5b5'
                        key: {
                            id: '668bb3d7b59d47a790107daefbc48bfa'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'title'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dccf92d5dda747febf94ce1e47582896'
                        key: {
                            sys_security_acl: 'e94d646dbb1e4dfba81a9352524a0ac5'
                            sys_user_role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'dcf7ef4afe334581b8a927aa120e5e82'
                        key: {
                            model: '312a6676ff8a49bb87cac61b44bdd7f6'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'dd2743de7b164c5984229f4e07ce836a'
                        key: {
                            role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                            contains: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dd3e8c35b63645e2a27f1cf240f0b0eb'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'dd59a9de859a409fab688763078769c3'
                        key: {
                            id: '029b6913dbf74698a0f6606c43053d29'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dda4711d6c1f49dab12570feb202600b'
                        key: {
                            sys_security_acl: '1f162d09c8444edaa98da8eec7e36e17'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ddc4843e26a2432683608b65a19750bd'
                        key: {
                            id: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ddcba54aa70d45b7bda08463c6922daf'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'ddfffd7107c84ac6ac7ac8bb27339b68'
                        key: {
                            model: 'a948a95476214fd0819ecf5b97dd2579'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'de2a6eb9d9ce4a5b9747791688be442e'
                        key: {
                            sys_ui_section: {
                                id: 'a0700e8c5c614fb79367e7bb27d8ef11'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Candidate Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de7218f197689bd45c91b63de053afa2'
                        key: {
                            name: 'var__m_sys_hub_flow_input_de7218f197689bd45c91b63de053af94'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'dece88a9774348508e390ade5a72a7bd'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_grade'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'deeffc319760dbd45c91b63de053af5e'
                        key: {
                            sys_ui_section: {
                                id: '1aeffc319760dbd45c91b63de053af56'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '12effc319760dbd45c91b63de053af5d'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'deeffc319760dbd45c91b63de053afc7'
                        key: {
                            sys_ui_section: {
                                id: '5aeffc319760dbd45c91b63de053af9f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'deeffc319760dbd45c91b63de053afc8'
                        key: {
                            sys_ui_section: {
                                id: '5aeffc319760dbd45c91b63de053af9f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'deeffc319760dbd45c91b63de053afc9'
                        key: {
                            sys_ui_section: {
                                id: '5aeffc319760dbd45c91b63de053af9f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'deeffc319760dbd45c91b63de053afca'
                        key: {
                            sys_ui_section: {
                                id: '5aeffc319760dbd45c91b63de053af9f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'interview_format'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'deeffc319760dbd45c91b63de053afcb'
                        key: {
                            sys_ui_section: {
                                id: '5aeffc319760dbd45c91b63de053af9f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '739763c0a3d50210974f00dfe51e611d'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'scheduled_appointment_date'
                            position: '1'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'df4d2bb1bee34828b45fd9236ef909da'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_hire_pers_num'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'df4fc380eb234984b33d296932eb0a09'
                        key: {
                            sys_ui_section: {
                                id: 'dc56d3e529734e42a9852ea20a574160'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Justification'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_responsibilities'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df5214b197689bd45c91b63de053afa2'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_575214b197689bd45c91b63de053af60'
                            element: 'error'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'df5858907462421da8c4a2c1651afec2'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_class_code'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'df86647d4c374cb09fa348c58e3a4dee'
                        key: {
                            id: '8005f75fa8984c94b5713a3d3f695a9c'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'list_title'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dfb0edd6a2984742bd358b0af98cf80a'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'classification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dfb17c8206e843c6b43938d92a9ef9f5'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_exemption_reason'
                            value: 'spc09_plus'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dfb5d0e0de084197be578fdb66fa4777'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacated_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e00833f83df84280a5649af0ebb57838'
                        key: {
                            document_key: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            variable: 'd803775a5b01001031a67d6f7281c7aa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e00add192a1f401e94eac98895f5cfb2'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            value: 'scheduled_for_committee'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e0186cbf4834437b961cdfcd6b8df09e'
                        key: {
                            id: '0006de7a35ef4ce89a9123f432c40783'
                            table: 'var__m_sys_hub_flow_input_70185ea4db9f0010efc65404ce9619b0'
                            field: 'table'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e0404f296a47404a956120ad8e9a35c6'
                        key: {
                            id: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e083b11e73fb464a9f62b520801c3648'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacated_personnel_number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e09c412423e04009a0e0bdb06aaed000'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_status'
                            value: 'awaiting_information'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e0a0f0435a5d49baad9e311af0dea4b5'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'employment_type'
                            value: 'regular'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'e0a37b8a0e984bcdbbbe6168b73f7dbc'
                        key: {
                            model: 'd04881f1f8fe4ad6bc1cc70c5a70b0e9'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e0b40dc4700d497b912c07d430c7bed6'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_job_title'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e12e9049a6274d02a415f7a31fc806d4'
                        key: {
                            id: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e1347f956d7045c08736a17447dbcb81'
                        key: {
                            document_key: '1f0c54535e16496ebdccde97e6b853f6'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e13bd2c6c9b2458da925d2f50d839ba6'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_hire_name'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e1ec5d4ce11d42569ee1f10f955f3008'
                        key: {
                            id: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_table'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e26683e5f0ad42688406fee6ce0cb0b3'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'committee_decision'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e2ef30719760dbd45c91b63de053af82'
                        key: {
                            sys_ui_section: {
                                id: 'eaef30719760dbd45c91b63de053af71'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e2ef30719760dbd45c91b63de053af83'
                        key: {
                            sys_ui_section: {
                                id: 'eaef30719760dbd45c91b63de053af71'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'associated_record'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e2ef30719760dbd45c91b63de053af84'
                        key: {
                            sys_ui_section: {
                                id: 'eaef30719760dbd45c91b63de053af71'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e2ef30719760dbd45c91b63de053af85'
                        key: {
                            sys_ui_section: {
                                id: 'eaef30719760dbd45c91b63de053af71'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e2ef30719760dbd45c91b63de053af86'
                        key: {
                            sys_ui_section: {
                                id: 'eaef30719760dbd45c91b63de053af71'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e2ef30719760dbd45c91b63de053af87'
                        key: {
                            sys_ui_section: {
                                id: 'eaef30719760dbd45c91b63de053af71'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'associated_table'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e2ef30719760dbd45c91b63de053af88'
                        key: {
                            sys_ui_section: {
                                id: 'eaef30719760dbd45c91b63de053af71'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e2ef30719760dbd45c91b63de053af89'
                        key: {
                            sys_ui_section: {
                                id: 'eaef30719760dbd45c91b63de053af71'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e2ef30719760dbd45c91b63de053af8a'
                        key: {
                            sys_ui_section: {
                                id: 'eaef30719760dbd45c91b63de053af71'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e2ef30719760dbd45c91b63de053af8b'
                        key: {
                            sys_ui_section: {
                                id: 'eaef30719760dbd45c91b63de053af71'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e2ef30719760dbd45c91b63de053aff0'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent_case'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e2ef30719760dbd45c91b63de053aff1'
                        key: {
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'account'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e32a89295e0c40dbae8bd31a64d7b101'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'employment_type'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'e334c1fd9760dbd45c91b63de053afb3'
                        key: {
                            id: '1e66b32390e74831839784f056ffec81'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e34ed39bf49e4c798818603013ea48c3'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_certification_split'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e35214b197689bd45c91b63de053afbc'
                        key: {
                            name: 'var__m_sys_hub_action_output_1f5214b197689bd45c91b63de053af0b'
                            element: 'basis'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e35214b197689bd45c91b63de053afd1'
                        key: {
                            name: 'var__m_sys_hub_action_output_1f5214b197689bd45c91b63de053af0b'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: 'e35254b197689bd45c91b63de053af19'
                        key: {
                            action_type_id: '1f5214b197689bd45c91b63de053af0b'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: 'e36210f197689bd45c91b63de053afb3'
                        key: {
                            model: 'ef6210f197689bd45c91b63de053af8d'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e38bbe01ec4403108bb2d76241880c3e'
                        key: {
                            name: 'asmt_metric_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e3b4dae2941a42b28e659935ed884c2c'
                        key: {
                            sys_security_acl: '951bdd2f69164f99ace3913be3ba6f4d'
                            sys_user_role: {
                                id: '2b2ddd98bd864e0a8d50f609d55ca7e2'
                                key: {
                                    name: 'x_snc_sas_positi_0.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3bf46a9bec94876912fd519c1c250ae'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'hiring_official'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e42b218b8c0a440c93d9c590c84b7be2'
                        key: {
                            sys_security_acl: 'f0c96fd4f3834bd3b4e78df9842f66bd'
                            sys_user_role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'e44485fd9760dbd45c91b63de053af59'
                        key: {
                            id: 'df5858907462421da8c4a2c1651afec2'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'e44485fd9760dbd45c91b63de053af8d'
                        key: {
                            id: 'e34ed39bf49e4c798818603013ea48c3'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: 'e482dcf197689bd45c91b63de053afcc'
                        key: {
                            model: 'ac82dcf197689bd45c91b63de053afb2'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e4f11d5f6242436babf6e5b18113f769'
                        key: {
                            document_key: '2dda10504e464176a36a179d6f7d2514'
                            variable: '78f334b8c763001085f5532bb4c26009'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e50062a83e074936bd85067bfe355c66'
                        key: {
                            document_key: '8668824cf52647e48b2074cec54f4a1b'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e56e07fdf454422c89dc80b2e62a8017'
                        key: {
                            document_key: 'fe6b0faf01664ca99d417bea0c03be98'
                            variable: 'a8ae38d1ff2200108c8733af793bf15c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e5ba30656303450190b4031f9cc8e3c4'
                        key: {
                            document_key: '220401ea2994417aa81b58c360d16ecb'
                            variable: '9c6b7e22c3211010381b60bc0eba8f98'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e5e715a9d88c4d809b0bc0c1ab3852b3'
                        key: {
                            id: 'fc80402e77834910ac4efdf3f3dd6709'
                            table: 'var__m_atf_input_variable_071ee5b253331200040729cac2dc348d'
                            field: 'user'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e5f616048d484a5a99708d8671ff6afc'
                        key: {
                            id: '8668824cf52647e48b2074cec54f4a1b'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e605059dfa674ff6a33d775d3f5c88a0'
                        key: {
                            id: '0006de7a35ef4ce89a9123f432c40783'
                            table: 'var__m_sys_pd_activity_type_prop_dc6459fbff001010393e53bd6338f1cb'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e652b0aa39fd4bd9982e4d352c9d5c0e'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'job_series'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e6c79f93fa9647c39004125abdb75724'
                        key: {
                            id: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'e6d39ce9552e4badac577895dc2d60a4'
                        key: {
                            model: 'fed85ed115a54408852597482a71c3aa'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e6ef30719760dbd45c91b63de053af41'
                        key: {
                            sys_ui_section: {
                                id: 'a6ef30719760dbd45c91b63de053af3f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes_list'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e6ef30719760dbd45c91b63de053af42'
                        key: {
                            sys_ui_section: {
                                id: 'a6ef30719760dbd45c91b63de053af3f'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Notes'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'comments'
                            position: '5'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'e73405fd9760dbd45c91b63de053af08'
                        key: {
                            id: '39617729665c4f7b9190643106c20bfe'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'e734c1fd9760dbd45c91b63de053afb4'
                        key: {
                            id: '1e66b32390e74831839784f056ffec81'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'e734c1fd9760dbd45c91b63de053afc4'
                        key: {
                            id: '25098392ef75435faddea864956c55a2'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e75214b197689bd45c91b63de053afae'
                        key: {
                            id: '575214b197689bd45c91b63de053af60'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'e75214b197689bd45c91b63de053afb5'
                        key: {
                            model: '1f5214b197689bd45c91b63de053af0b'
                            element: 'basis'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e77384f993d942e7b40bc53d03f3253e'
                        key: {
                            document_key: 'e8377d200cc644ca9d70456937e1375f'
                            variable: 'a532d26fde6d44eeaf7a6d4d24a1fe3d'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e77c343a96c6401ab9b75278dbdd40b4'
                        key: {
                            sys_security_acl: 'de50f2a3251f45f79a3b1b42693a7394'
                            sys_user_role: {
                                id: '2620a9cd267f450fb822d1d8983bf8cd'
                                key: {
                                    name: 'x_snc_sas_positi_0.fulfiller'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e797ba9dec9b41ef8e8fa2d1a3dbe834'
                        key: {
                            document_key: 'cab24e62648f4bafbeb7d2dcf285c41e'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'e84485fd9760dbd45c91b63de053af5a'
                        key: {
                            id: 'df5858907462421da8c4a2c1651afec2'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e85709a2bbe14c98a99da17c679502d6'
                        key: {
                            sys_ui_section: {
                                id: '510fc737ea3b47df92c8a5954755f35e'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Workforce Data'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: 'e8a93dc2de6d4cf5bd19794d2e2333c5'
                        key: {
                            model: 'a948a95476214fd0819ecf5b97dd2579'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea351f307cb040e2a6109f34fbd5aa6e'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'exemption_justification'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ea5250b197689bd45c91b63de053afb3'
                        key: {
                            document_key: 'a65250b197689bd45c91b63de053af70'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ea5250b197689bd45c91b63de053afed'
                        key: {
                            document_key: '6e5250b197689bd45c91b63de053af62'
                            variable: '2a5250b197689bd45c91b63de053afc3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea629cb197689bd45c91b63de053af5e'
                        key: {
                            name: 'var__m_sys_hub_flow_output_9a629cb197689bd45c91b63de053af32'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ea7bf41b94b44b36a3af0ed37074c9a1'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_org_chart_verified'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ea8bebb994484d8d94f7516612b8036c'
                        key: {
                            sys_security_acl: 'a4bde341530648989680cd810741110e'
                            sys_user_role: {
                                id: '1f6ec04a4e2045b8ab29fea9bac34df4'
                                key: {
                                    name: 'x_snc_sas_positi_0.requester'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eabc4baf00134fbb8a99fadf1fa5904d'
                        key: {
                            document_key: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'eaef30719760dbd45c91b63de053af71'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            caption: 'NULL'
                            view: {
                                id: 'a22b4ae3b7702110f94f20b3ae11a980'
                                key: {
                                    name: 'Checklist'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eb299c34161f47a7b6a0dfc430a1cb7b'
                        key: {
                            sys_ui_section: {
                                id: '510fc737ea3b47df92c8a5954755f35e'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Workforce Data'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'eb3405fd9760dbd45c91b63de053af09'
                        key: {
                            id: '39617729665c4f7b9190643106c20bfe'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'eb34c1fd9760dbd45c91b63de053afc5'
                        key: {
                            id: '25098392ef75435faddea864956c55a2'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eb39c0af889b49bc91beeb35d4e187b8'
                        key: {
                            document_key: '807b0634bd944d69951e9fe1cf3f2e81'
                            variable: '3499c6631b630010affd0e55cc4bcb90'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'eb5254b197689bd45c91b63de053af15'
                        key: {
                            id: '1f5214b197689bd45c91b63de053af0b'
                            table: 'var__m_sys_hub_action_output_1f5214b197689bd45c91b63de053af0b'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ebcd5f5ad1224d139118acbc04ff796f'
                        key: {
                            sys_ui_section: {
                                id: '77c1ca7b633f41b5afc3eac3b940ab64'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Position Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_class_code'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ec5a25dca7c24d27bfc465eaf81e6e3a'
                        key: {
                            id: '807b0634bd944d69951e9fe1cf3f2e81'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec72d0f197689bd45c91b63de053af4c'
                        key: {
                            name: 'var__m_sys_hub_flow_input_e472d0f197689bd45c91b63de053af3c'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ed07dd0bd1c542d0a99673f86cf3b291'
                        key: {
                            document_key: '12dca8870c744c49b8f5e4b2c5415e94'
                            variable: '8c07aba5ff6033008d3f5d9ad53bf13b'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ed3429a88b4f44c0a465aa48dad0eadb'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacancy_reason'
                            value: 'promotion'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'edba2be1b3494d1697700e8ab974994d'
                        key: {
                            name: 'service_offering'
                            element: 'x_snc_sas_positi_0_u_annual_cost_avoided'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'edd108a77c4449a5b33757e11001942d'
                        key: {
                            sys_ui_section: {
                                id: 'c806ee8c1dc9423e84b54e7ed9c6c069'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Request Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: 'ee4623a0d1f84cb89427da48e163cce2'
                        key: {
                            model: '4e9c593b813d43faae56cda8f14cedc9'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ee5250b197689bd45c91b63de053afec'
                        key: {
                            id: '6e5250b197689bd45c91b63de053af62'
                            table: 'var__m_sys_hub_action_output_6e5250b197689bd45c91b63de053af62'
                            field: 'date_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee61d3682c1848f0a4df462405315557'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'budget_status'
                            value: 'unbudgeted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ee67331f9c2842b69842e66b5adab2a8'
                        key: {
                            sys_security_acl: 'efe304e5b0584a79a77a87a195f330f7'
                            sys_user_role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eee7c25e19a44daa884865f3b1b840d0'
                        key: {
                            document_key: '8668824cf52647e48b2074cec54f4a1b'
                            variable: '54c49bc60f3200102920c912d4767ee2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eeef30719760dbd45c91b63de053af37'
                        key: {
                            sys_ui_section: {
                                id: '6aef30719760dbd45c91b63de053af03'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'Task'
                                    view: 'd9a85e2493f08310d6b527dbd7373cf8'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'eeef30719760dbd45c91b63de053af9d'
                        key: {
                            sys_ui_form: {
                                id: 'a6ef30719760dbd45c91b63de053af6c'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'eaef30719760dbd45c91b63de053af71'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'a22b4ae3b7702110f94f20b3ae11a980'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'ef5214b197689bd45c91b63de053aff4'
                        key: {
                            model: '1f5214b197689bd45c91b63de053af0b'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'efb0aab96c5947a39bafee6a48d4013c'
                        key: {
                            id: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'experience_status_record'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'efb492476ac449c3b15e994ae72a40f0'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'efc23cb1dde44a2f8ffbd477f19a3bda'
                        key: {
                            sys_security_acl: 'a4bde341530648989680cd810741110e'
                            sys_user_role: {
                                id: '2b2ddd98bd864e0a8d50f609d55ca7e2'
                                key: {
                                    name: 'x_snc_sas_positi_0.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'efd6e772702f414ab9172a31a0878052'
                        key: {
                            sys_ui_section: {
                                id: '77c1ca7b633f41b5afc3eac3b940ab64'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Position Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'efe7a88f67f64cab80b756ce7ec8dffa'
                        key: {
                            id: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'effc82e9fb6148af8faf28fec86b8d6b'
                        key: {
                            document_key: '12dca8870c744c49b8f5e4b2c5415e94'
                            variable: '1985e0ceff2433008d3f5d9ad53bf1ba'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f003b637323e41cf93e748069646804e'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_budget_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f02e597d72584fee88457a39cebcc032'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'opm_decision_on'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: 'f04c8fbc3a4143c5bdd3d4a53e13830b'
                        key: {
                            model: '93158c9efb474c7bb780c1a1bebcb007'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f08c991d9c624069baa4ee525a5817fa'
                        key: {
                            id: '807b0634bd944d69951e9fe1cf3f2e81'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_sla'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f0c559c702ea463abbdfaf5a560e1b10'
                        key: {
                            document_key: '668bb3d7b59d47a790107daefbc48bfa'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f0c8a53c6fb94898a769e11fe45b9ae9'
                        key: {
                            name: 'var__m_sys_hub_action_output_fed85ed115a54408852597482a71c3aa'
                            element: 'director'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f0d1d5c22b681fd0b7b1f93a5e91bf99'
                        key: {
                            name: 'var__m_sys_pd_snapshot_input_24d1d5c22b681fd0b7b1f93a5e91bf18'
                            element: 'parent_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f199ca96fcf049f88c8ede5d16b2612e'
                        key: {
                            name: 'var__m_sys_hub_action_output_4e1251c2235d4d28b28f86c4b58deab5'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'f1a11a8f6cba413bb1058c422d517261'
                        key: {
                            model: 'f71d6da96e444011a9f4c089338c3268'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f24547ced3ed4a32b1b27422370e55ab'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'submitted_on'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'f2ef70719760dbd45c91b63de053af88'
                        key: {
                            sys_ui_form: {
                                id: '26ef30719760dbd45c91b63de053afbf'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'aaef70719760dbd45c91b63de053af1b'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '0b28fe81ec8003108bb2d76241880c97'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'f2efb0719760dbd45c91b63de053af92'
                        key: {
                            sys_ui_form: {
                                id: '7eefb0719760dbd45c91b63de053af26'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: '15b4872797be03d05c91b63de053af80'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '32efb0719760dbd45c91b63de053af45'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: '15b4872797be03d05c91b63de053af80'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f30df109a1414c87bcf9a4d1dbbb489e'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'candidate_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f320f854378d4b14937d8e151e1fc207'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_exemption_reason'
                            value: 'emergency'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f33405fd9760dbd45c91b63de053af3b'
                        key: {
                            id: '443bff3a66694b45aef81cc4de8dc0e2'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f33405fd9760dbd45c91b63de053af99'
                        key: {
                            id: '66f229997a7a49bcb4648261e6bdb7c1'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f3470dc241b44f9fa8d59a5997d13769'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'director_approver'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'f35254b197689bd45c91b63de053afa2'
                        key: {
                            model: '735254b197689bd45c91b63de053af9d'
                            element: 'department_sys_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f40855c17ac746059762bd4333363b03'
                        key: {
                            document_key: '43334d404da048049e5bb90b26f4a362'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f41d8063557b47518184f91efdbfe874'
                        key: {
                            document_key: '668bb3d7b59d47a790107daefbc48bfa'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f44485fd9760dbd45c91b63de053af9d'
                        key: {
                            id: 'f59df8d781f84457891ba9f7f6f4bbf9'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f4454293c2634814a8c014468b2b1c02'
                        key: {
                            id: '2d362e4001784e2a847b6d64fac16074'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_sla'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f585984b7c224acb97099ceb82b9cee3'
                        key: {
                            sys_ui_section: {
                                id: 'f6a85aa2900446eaa7cbdb89061e2be8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Committee / OPM Decision'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_committee_date'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f585f948da6942c79968fbbd5e6d8966'
                        key: {
                            document_key: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            variable: '66c5b3885b16001022527d6f7281c77c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f591851e843c444fa8bec78e32157926'
                        key: {
                            document_key: '9b1bdab7f6584729ae3809d69c2ecf78'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f59df8d781f84457891ba9f7f6f4bbf9'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_business_area'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f5af45f58b44413db38da914cad06907'
                        key: {
                            id: '668bb3d7b59d47a790107daefbc48bfa'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'associated_table'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f5f3e888f90245b2811b312cd0e5b35f'
                        key: {
                            id: '2dda10504e464176a36a179d6f7d2514'
                            table: 'var__m_sys_hub_flow_input_2b8b42e31b630010affd0e55cc4bcbe9'
                            field: 'message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f5f898f0d8654d8e93b37f3cf57fd612'
                        key: {
                            name: 'var__m_sys_hub_action_output_2447c57edaca4662b1d0b2ec06473733'
                            element: 'date_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f617e8bfce7247a59db42b623311d9b4'
                        key: {
                            document_key: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            variable: '29255db25b21001070e4492c11f91ac5'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'f62e7211caca4456bfc494b9cf500b1e'
                        key: {
                            model: 'dc6d40bdcccf4dd4b3be966bf8efc32c'
                            element: 'error'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'f68e416621c74d7aa120cae048ec5204'
                        key: {
                            model: 'fed85ed115a54408852597482a71c3aa'
                            element: 'director'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'f6a85aa2900446eaa7cbdb89061e2be8'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            caption: 'Committee / OPM Decision'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'f6efb0719760dbd45c91b63de053af21'
                        key: {
                            sys_ui_form: {
                                id: '76ef70719760dbd45c91b63de053afb0'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f7149631031d4eb09398bace2ed4b02c'
                        key: {
                            name: 'var__m_sys_hub_action_output_fed85ed115a54408852597482a71c3aa'
                            element: 'group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f718c12bcdef4c5d9aed751583bb8b35'
                        key: {
                            sys_ui_section: {
                                id: '5c5795a9d90e4faa95915618d3308b04'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Vacancy Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f73405fd9760dbd45c91b63de053af3c'
                        key: {
                            id: '443bff3a66694b45aef81cc4de8dc0e2'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f73405fd9760dbd45c91b63de053af4c'
                        key: {
                            id: '5562c3d2c1c94502a2e4b1654af19faf'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f73405fd9760dbd45c91b63de053af66'
                        key: {
                            id: '5af862a07d7d41a89446ce4cc230365d'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f73405fd9760dbd45c91b63de053af9a'
                        key: {
                            id: '66f229997a7a49bcb4648261e6bdb7c1'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f73c082b38684e9ebb4884584308247d'
                        key: {
                            id: 'fed85ed115a54408852597482a71c3aa'
                            table: 'var__m_sys_hub_action_output_fed85ed115a54408852597482a71c3aa'
                            field: 'director'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: 'f75254b197689bd45c91b63de053afd2'
                        key: {
                            model: 'fb5254b197689bd45c91b63de053afcb'
                            element: 'department_sys_id'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'f75254b197689bd45c91b63de053afdb'
                        key: {
                            model: 'fb5254b197689bd45c91b63de053afcb'
                            element: 'analyst'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f7f659a1c0fe43d78e51b149468248ec'
                        key: {
                            sys_ui_section: {
                                id: 'f6a85aa2900446eaa7cbdb89061e2be8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Committee / OPM Decision'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_opm_designee'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f816b9dc3cb54fd1a02badb84594b355'
                        key: {
                            document_key: 'e8377d200cc644ca9d70456937e1375f'
                            variable: 'f62d06e222144a8abfd7e0678fbc27fd'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f84485fd9760dbd45c91b63de053af9e'
                        key: {
                            id: 'f59df8d781f84457891ba9f7f6f4bbf9'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f84485fd9760dbd45c91b63de053afae'
                        key: {
                            id: 'ffab0348daf24fc79487c49e4889fe02'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'f86258b197689bd45c91b63de053af3b'
                        key: {
                            model: '786258b197689bd45c91b63de053af1e'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'f87025afdaf44fc48056110053d884f5'
                        deleted: false
                        key: {
                            ui_policy: '562141bda5a04b229dd2420a0ec05926'
                            field: 'u_current_salary'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f8cde677be974096b42864969fb21388'
                        key: {
                            document_key: '7eb1d0a3a8f0489c9af271c5b2952fe1'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f905bb05585d49f792d2dbc0cf0f6547'
                        key: {
                            sys_ui_section: {
                                id: 'f6a85aa2900446eaa7cbdb89061e2be8'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Committee / OPM Decision'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f9389010d41a4c108c7e968274ce91ae'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f950b016b9b943058fec62a4927b9f93'
                        key: {
                            document_key: '1e653f76d6af457ea00ee1885550e750'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f951ec3d0b784dfc93ed8128e1e8d915'
                        key: {
                            document_key: '51cd2e49029840dbb1ec9183ee037fce'
                            variable: '3499c6631b630010affd0e55cc4bcb90'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'f96f3ec64bfd4e1a999b3a48b24960a6'
                        key: {
                            role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                            contains: {
                                id: 'bad98a5dad3e4fb9b7cba80f590aa614'
                                key: {
                                    name: 'x_snc_sas_positi_0.committee'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f98853f7e2bc4b0ea35f866455b54182'
                        key: {
                            sys_ui_section: {
                                id: '77c1ca7b633f41b5afc3eac3b940ab64'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Position Details'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_city_location'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f99097054dd94e22a5c22ff8150a77f8'
                        key: {
                            id: 'eecf9a4ddb8d40f8ac5071afb20acaac'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            field: 'table'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'f9ecd59d76894555ba8758c0121733c1'
                        key: {
                            name: 'x_snc_sas_positi_0_routing'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f9ece7ab434441dd85081effed38e237'
                        key: {
                            id: '51cd2e49029840dbb1ec9183ee037fce'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa005e421d324388a7b4ca5652d55076'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'positions_filled'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fa7a304e18044942ba1a1941936180ca'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'shared_services_series'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: 'fa82143597689bd45c91b63de053afdd'
                        key: {
                            model: 'ba82143597689bd45c91b63de053afc6'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fa99b21ce7be4fbe95c071464c0b5edd'
                        key: {
                            sys_ui_section: {
                                id: '510fc737ea3b47df92c8a5954755f35e'
                                key: {
                                    name: 'x_snc_sas_positi_0_case'
                                    caption: 'Workforce Data'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_turnover_rate'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'faa16473c98843a69f11fd81678b8eb9'
                        key: {
                            document_key: '668bb3d7b59d47a790107daefbc48bfa'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'faa332ea398447ecbde26fcd625e9d7a'
                        key: {
                            name: 'var__m_sys_hub_flow_input_d04881f1f8fe4ad6bc1cc70c5a70b0e9'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'faa46c7ffbd34a03b9ffe51c6d510d9f'
                        key: {
                            model: '2e1648ecd23b45deaf4ebefc7ecb5a1b'
                            element: 'case'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fad78c82ddeb4cdfab968cae62a66d0c'
                        key: {
                            document_key: '807b0634bd944d69951e9fe1cf3f2e81'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'faef70719760dbd45c91b63de053aff3'
                        key: {
                            sys_ui_section: {
                                id: '7eef70719760dbd45c91b63de053afd4'
                                key: {
                                    name: 'x_snc_sas_positi_0_req_task'
                                    caption: 'NULL'
                                    view: 'e5d670f6773c7110f94fc35b8c5a9932'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'f2ef70719760dbd45c91b63de053aff2'
                            position: '11'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'fb3405fd9760dbd45c91b63de053af4d'
                        key: {
                            id: '5562c3d2c1c94502a2e4b1654af19faf'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'fb3405fd9760dbd45c91b63de053af67'
                        key: {
                            id: '5af862a07d7d41a89446ce4cc230365d'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb721cf197689bd45c91b63de053aff7'
                        key: {
                            name: 'var__m_sys_hub_flow_input_3f721cf197689bd45c91b63de053afab'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: 'fb721cf197689bd45c91b63de053afff'
                        key: {
                            model: '3f721cf197689bd45c91b63de053afab'
                            element: 'outcome'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fc14ad3f85da4a72b6d9e0f09f7c20f6'
                        key: {
                            sys_security_acl: '73d906d59954406d8e4a28c9b5d8cb1b'
                            sys_user_role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'fc35aea358554bf99656677496cf6f1f'
                        key: {
                            id: '668bb3d7b59d47a790107daefbc48bfa'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            field: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'fc42042245e84040a2be6f51212929e9'
                        key: {
                            id: '0cf5a39dc2394e8faa78c230bc4ddb7a'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_checklist'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'fc4485fd9760dbd45c91b63de053afaf'
                        key: {
                            id: 'ffab0348daf24fc79487c49e4889fe02'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc4e0d9a7bab40298267e516ec5afb3f'
                        key: {
                            name: 'var__m_sys_hub_flow_input_e8e0157adf214dadb61c85e337c1c4de'
                            element: 'case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'fc97d5717bca4c3db01576d582287771'
                        key: {
                            id: '2c8a37aeec854ebab1a2b2de5ef5d676'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            field: 'show_sla'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'fd0f65d2648a48d9929965d9c0abebec'
                        key: {
                            question: '38caae0a70f84ce38c2ad3b360f56e0c'
                            value: 'general_revenue'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'fda8123266e244db8f917bded93d2382'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_workforce_end'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fde1756ab00b4a45b50d10c095b90fae'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fe5ee3cb9e7c4406a0ab4d8907f0df0a'
                        key: {
                            document_key: '4115562f58cb41309eaf374d82137410'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'fe9e0922e2544558a6c6f675c0865c92'
                        key: {
                            id: '220401ea2994417aa81b58c360d16ecb'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            field: 'associated_record'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fec1e3b8115a4123aedc4ce1fc15397c'
                        key: {
                            sys_security_acl: 'b1fbf8eee5614ee19e9355fd0507dfc6'
                            sys_user_role: {
                                id: '203889a629094803a65288ded70b2e7a'
                                key: {
                                    name: 'x_snc_sas_positi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fee1f746c3884156ad87a1518b5a5c4d'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'feeb9e47fda944479d1637c70e32c545'
                        key: {
                            document_key: '029b6913dbf74698a0f6606c43053d29'
                            variable: 'd803775a5b01001031a67d6f7281c7aa'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ff635c108b9e4b28b2c0432a61c108af'
                        key: {
                            document_key: 'e6728198f65942229535b889f83873b0'
                            variable: 'b27b2b29ff6033008d3f5d9ad53bf164'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff83378b71984d3a80c0844a2c182268'
                        key: {
                            name: 'var__m_sys_hub_flow_output_874e7068fbfd434e9fe0a72f3cb7ff0a'
                            element: 'outcome'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'ffab0348daf24fc79487c49e4889fe02'
                        key: {
                            cat_item: 'NULL'
                            variable_set: 'NULL'
                            name: 'itf_exec_attestation'
                        }
                    },
                ]
            }
        }
    }
}
