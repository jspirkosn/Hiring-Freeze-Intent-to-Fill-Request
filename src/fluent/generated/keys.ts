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
                        table: 'sys_dictionary'
                        id: '00464424260f4cd3a621a2c0a17b2cc1'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'duties_absorbed_explanation'
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
                        table: 'sys_documentation'
                        id: '01385e34977b40a5b424f918d8c5ef6f'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacated_by_name'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: '0255ea1c19d545589323e7bedd3fbfee'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'class_code'
                            language: 'en'
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
                        table: 'sys_choice_set'
                        id: '040c5344996c4f10a96e610d0b56ab52'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'request_basis'
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
                        table: 'sys_variable_value'
                        id: '078979098d6e4fdca2db5e5e2822f897'
                        key: {
                            document_key: '95d0138cb1c04c10ae87ed5d790f2663'
                            variable: '90144b535320220002c6435723dc3488'
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
                        id: '0804afaee6d8489fbfc82f60140df84f'
                        key: {
                            id: 'd9938bb6667c429c8c967e2ce0c9052f'
                            table: 'var__m_atf_input_variable_1f39a288df60220062fe6c7a4df2639d'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '08543644179541519b0033a5e0fcc9e0'
                        key: {
                            ui_policy: '562141bda5a04b229dd2420a0ec05926'
                            field: 'u_hire_pers_num'
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
                        table: 'sys_dictionary'
                        id: '095367865edf4df4b45d847e22df48ee'
                        key: {
                            name: 'asmt_metric_type'
                            element: 'ms_adaptive_cards'
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
                        table: 'sys_variable_value'
                        id: '12b2269b3a0e44e8a547482c89a8d683'
                        key: {
                            document_key: '41aad94c2ca54d829d5cbde201a6c0ff'
                            variable: '736b784a8c564b60947b631109a186c8'
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
                        id: '19bb48f991a5450f8e6ef26d8872f098'
                        key: {
                            document_key: '3e5ebddc46ba4f668c4d0c3e91fea8cc'
                            variable: '42f2564b73031300440211d8faf6a777'
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
                        table: 'sys_dictionary'
                        id: '1aa5b53c34384fdaa1f7b8bdecb5c455'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'job_title'
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
                        table: 'sys_variable_value'
                        id: '20b64e3024964ef6bb89cd129d237622'
                        key: {
                            document_key: 'e6728198f65942229535b889f83873b0'
                            variable: '8c07aba5ff6033008d3f5d9ad53bf13b'
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
                        table: 'sys_dictionary'
                        id: '21c1b9e30b8d4807b9021b133ceb1852'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'position_number'
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
                        table: 'sys_dictionary'
                        id: '22b48ea7fa7047f28368a8a9a99eb2b5'
                        key: {
                            name: 'service_offering'
                            element: 'NULL'
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
                        table: 'sys_variable_value'
                        id: '23aaf0664c5d46ce9a13ed3a63c163c7'
                        key: {
                            document_key: '09f943cf48f846b299d9f1d9cfa65a45'
                            variable: '6aad5a575360220002c6435723dc34b0'
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
                        table: 'sys_documentation'
                        id: '24b5e835216f4093ac68c7f79949685d'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'title_contains_director'
                            language: 'en'
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
                        table: 'sys_variable_value'
                        id: '2e731f73f16a4de291838a5b32f097c2'
                        key: {
                            document_key: '47efe189ba0a46b79924e3ac053c6022'
                            variable: '90144b535320220002c6435723dc3488'
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
                        table: 'sys_variable_value'
                        id: '2fcfd107d586414d831828bcb301acee'
                        key: {
                            document_key: '8c1c00af0e93445fa849f1b40c4271df'
                            variable: '67400008676003007ba405225685efa4'
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
                        id: '319b01fa3ee946a8a37341b0f2b8658f'
                        key: {
                            document_key: '9179ef7f351a48b6a83fa37ba5625a36'
                            variable: 'b27b2b29ff6033008d3f5d9ad53bf164'
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
                        key: {
                            table: 'x_snc_sas_positi_0_case'
                            short_description: 'Unbudgeted position required'
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
                        table: 'sys_dictionary'
                        id: '3aea3fb1f9e541c2b6f0385af2d72c6b'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'active'
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
                        table: 'sys_variable_value'
                        id: '3ea34d2483d64b4e897eae6364a8a83b'
                        key: {
                            document_key: 'bf4990c5bc974603ad9d7f8f6d35f983'
                            variable: '989d9e235324220002c6435723dc3484'
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
                        table: 'sys_documentation'
                        id: '413161ccc55b4f0d8fd4594da9c76d32'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'exemption_justification'
                            language: 'en'
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
                        table: 'sys_ui_policy'
                        id: '44f670f5be5049a78b80f6a667643b08'
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
                        table: 'sys_documentation'
                        id: '4638c560635d4fe6abf4ca6fea12a6b6'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'NULL'
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
                        table: 'sys_dictionary'
                        id: '48695f6b3c8c4fa69b6320e8d2227452'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'NULL'
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
                        table: 'sys_documentation'
                        id: '5311068d6fee456f92361a5449a6ef6f'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'director_approver'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '542087c111c14ec593274db302bf8c27'
                        key: {
                            name: 'x_snc_sas_positi_0_funding'
                            element: 'parent_case'
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
                        table: 'sys_ui_policy'
                        id: '562141bda5a04b229dd2420a0ec05926'
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
                        table: 'sys_variable_value'
                        id: '57687ec2a7614c438b7c4393b74718f2'
                        key: {
                            document_key: '56cde3c4e8d04b178e2ef2029f16bd71'
                            variable: '989d9e235324220002c6435723dc3484'
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
                        id: '5b358e0429c54c199ebb2aec3342ac47'
                        key: {
                            name: 'service_offering'
                            element: 'x_snc_sas_positi_0_u_annual_run_cost'
                            language: 'en'
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
                        table: 'sys_choice_set'
                        id: '5ecd49becb4f4d3d96d7da82f9e3c0f0'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_budget_status'
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
                        table: 'sys_documentation'
                        id: '5f9b66ef965d4203958f638f60ddb2d6'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'personnel_action'
                            language: 'en'
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
                        table: 'sys_variable_value'
                        id: '64499764acb548f3a9abb27ed675af25'
                        key: {
                            document_key: '47efe189ba0a46b79924e3ac053c6022'
                            variable: 'e6e3c7535320220002c6435723dc3496'
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
                        table: 'sys_dictionary'
                        id: '655de45ec5a14bf1aedb2edadde5d93f'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'additional_info_response'
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
                        table: 'sys_variable_value'
                        id: '66709580000a4ec29bb4f164b1f43c65'
                        key: {
                            document_key: '26d4e928d1574d8d813f960bbeb6f8f7'
                            variable: '1985e0ceff2433008d3f5d9ad53bf1ba'
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
                        table: 'sys_ui_policy_action'
                        id: '69c60a046c4c4a839af2958ea2a2d42d'
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
                        table: 'sys_variable_value'
                        id: '6eb1cd2e70ac4701bab4b86550ff8dac'
                        key: {
                            document_key: 'e60435768b404a0f97553136636a8024'
                            variable: '9024a37f671003007ba405225685efe5'
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
                        table: 'sys_variable_value'
                        id: '70c2d7b466b14e08a3257594f68654b2'
                        key: {
                            document_key: '9179ef7f351a48b6a83fa37ba5625a36'
                            variable: 'ff06ab840f20101091d0f00c97767e6d'
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
                        table: 'sys_documentation'
                        id: '729b654179bf496d8ef1dccb5ec759b6'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'opm_comments'
                            language: 'en'
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
                        table: 'sys_variable_value'
                        id: '7b5a935bab16476bb14effabf9662d47'
                        key: {
                            document_key: '8c1c00af0e93445fa849f1b40c4271df'
                            variable: 'cbddfa135320220002c6435723dc3415'
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
                        table: 'sys_dictionary'
                        id: '7f226ffea078471cba0e46c445a0b11e'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'streamlining_fit'
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
                        table: 'sys_dictionary'
                        id: '808186fe733543078148b0a2bf7b4577'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'title_contains_director'
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
                        table: 'sys_variable_value'
                        id: '865017277936405fbcdd81b50cc72d4a'
                        key: {
                            document_key: 'e6728198f65942229535b889f83873b0'
                            variable: '98c44875ffa033008d3f5d9ad53bf1fa'
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
                        id: '8a154d06e27c41719c5c536200a9e55a'
                        key: {
                            id: '1f0c54535e16496ebdccde97e6b853f6'
                            table: 'var__m_atf_input_variable_17a72288df60220062fe6c7a4df26397'
                            field: 'record_id'
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
                        table: 'sys_variable_value'
                        id: '902b6fc5a3304045943ffc780b630900'
                        key: {
                            document_key: '56cde3c4e8d04b178e2ef2029f16bd71'
                            variable: '42f2564b73031300440211d8faf6a777'
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
                        table: 'sys_documentation'
                        id: '93704d9dd1644273b7cec1bd903062b6'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'grade'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '963d6ec6db014a6bb6ce5b024edae8fb'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'unfilled_impact'
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
                        table: 'sys_variable_value'
                        id: '9924f197d8f14d259b2261f7748932ed'
                        key: {
                            document_key: '8c1c00af0e93445fa849f1b40c4271df'
                            variable: '6aad5a575360220002c6435723dc34b0'
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
                        table: 'sys_dictionary'
                        id: '9abe3011602e4ec699f55f4faa2a611d'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'work_location'
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
                        table: 'sys_choice_set'
                        id: '9d3c79ae1e624e30b41073b477fa1a8a'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'u_vacancy_reason'
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
                        table: 'sys_documentation'
                        id: '9ea3fa98e7c3457abea7ff6310a29fdd'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'work_location'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: 'a0acfdb864c0438fbdf5d651edfc2a0c'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'pay_table'
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
                        table: 'sys_variable_value'
                        id: 'a2770b7869ce48ed9a34d46799f565f9'
                        key: {
                            document_key: '09f943cf48f846b299d9f1d9cfa65a45'
                            variable: 'cbddfa135320220002c6435723dc3415'
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
                        table: 'sys_ui_policy_action'
                        id: 'a3f5f4a296f848db8d7bb2e003345587'
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
                        table: 'sys_dictionary'
                        id: 'a6260626615e4dbf9b794ff41c0e2986'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'vacancy_reason'
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
                        id: 'a8facaad77ac43909d2e768040a02451'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'requisition_acknowledged_on'
                            language: 'en'
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
                        table: 'sys_ui_policy_action'
                        id: 'ae2855b433fb411c8ccf8c618185db88'
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
                        table: 'sys_variable_value'
                        id: 'b0257c72527340d09e6c3c44dc3a75c2'
                        key: {
                            document_key: '473a7ba95d224dd585a0102ab64a7423'
                            variable: 'b27b2b29ff6033008d3f5d9ad53bf164'
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
                        table: 'sys_variable_value'
                        id: 'b2f0a16ab7d245c9a970f26b07f7e689'
                        key: {
                            document_key: 'f749db0c4961417caef370d8e3453a38'
                            variable: 'a532d26fde6d44eeaf7a6d4d24a1fe3d'
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
                        table: 'sys_index'
                        id: 'b98b7f8f08834047893713a18be45b7c'
                        key: {
                            logical_table_name: 'x_snc_sas_positi_0_classification'
                            col_name_string: 'class_code'
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
                        id: 'bbb26fe7448e486ba4981974adb49a9d'
                        key: {
                            document_key: '8d7d63d54e504c73a45cc65a68015d56'
                            variable: '736b784a8c564b60947b631109a186c8'
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
                        table: 'sys_ui_policy_action'
                        id: 'bf257d5e7ca442458b293ebdaf919b32'
                        key: {
                            ui_policy: '44f670f5be5049a78b80f6a667643b08'
                            field: 'u_opm_comments'
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
                        table: 'sys_variable_value'
                        id: 'c18f579a35a04bfe8c77c89d043b5f80'
                        key: {
                            document_key: '09f943cf48f846b299d9f1d9cfa65a45'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'c44d6464738c44b58330b5f06c6af103'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'state'
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
                        table: 'sys_variable_value'
                        id: 'c4c1fa01a7c943c1898dcbf67da5fcce'
                        key: {
                            document_key: '43334d404da048049e5bb90b26f4a362'
                            variable: 'e6e3c7535320220002c6435723dc3496'
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
                        table: 'sys_documentation'
                        id: 'c64596df249744f68e6cdfdd337567e1'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'position_responsibilities'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: 'ca6fc86c22284c7e8a876310fc0cb28b'
                        key: {
                            name: 'x_snc_sas_positi_0_classification'
                            element: 'hiring_freeze_exempt'
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
                        table: 'sys_variable_value'
                        id: 'cb615878bdc94124bd9e356b95d10314'
                        key: {
                            document_key: 'e6728198f65942229535b889f83873b0'
                            variable: '1985e0ceff2433008d3f5d9ad53bf1ba'
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
                        table: 'sys_db_object'
                        id: 'd2a4df985257490d954f0382ff6e53e9'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
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
                        table: 'sys_documentation'
                        id: 'd3088dd36015449bb9331d0f9e061fad'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'job_title'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: 'd55bdd3de4d84ea7aeeed7814e4e0472'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_exemption_reason'
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
                        table: 'sys_documentation'
                        id: 'd7afaf28add5435a926d9809afbba072'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'candidate_personnel_number'
                            language: 'en'
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
                        table: 'sys_variable_value'
                        id: 'd998c41dadec4004bcaff443a4cb1f57'
                        key: {
                            document_key: '26d4e928d1574d8d813f960bbeb6f8f7'
                            variable: '6f69fc4aff6433008d3f5d9ad53bf18c'
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
                        table: 'sys_variable_value'
                        id: 'e1347f956d7045c08736a17447dbcb81'
                        key: {
                            document_key: '1f0c54535e16496ebdccde97e6b853f6'
                            variable: '46dbcb535320220002c6435723dc3409'
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
                        table: 'sys_dictionary'
                        id: 'e32a89295e0c40dbae8bd31a64d7b101'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'employment_type'
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
                        table: 'sys_element_mapping'
                        id: 'e5e715a9d88c4d809b0bc0c1ab3852b3'
                        key: {
                            id: 'fc80402e77834910ac4efdf3f3dd6709'
                            table: 'var__m_atf_input_variable_071ee5b253331200040729cac2dc348d'
                            field: 'user'
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
                        table: 'sys_dictionary'
                        id: 'ea351f307cb040e2a6109f34fbd5aa6e'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'exemption_justification'
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
                        table: 'sys_variable_value'
                        id: 'effc82e9fb6148af8faf28fec86b8d6b'
                        key: {
                            document_key: '12dca8870c744c49b8f5e4b2c5415e94'
                            variable: '1985e0ceff2433008d3f5d9ad53bf1ba'
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
                        table: 'sys_dictionary'
                        id: 'f24547ced3ed4a32b1b27422370e55ab'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'submitted_on'
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
                        table: 'sys_dictionary'
                        id: 'f3470dc241b44f9fa8d59a5997d13769'
                        key: {
                            name: 'x_snc_sas_positi_0_case'
                            element: 'director_approver'
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
                        table: 'sys_ui_policy_action'
                        id: 'f87025afdaf44fc48056110053d884f5'
                        key: {
                            ui_policy: '562141bda5a04b229dd2420a0ec05926'
                            field: 'u_current_salary'
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
                        table: 'sys_documentation'
                        id: 'fde1756ab00b4a45b50d10c095b90fae'
                        key: {
                            name: 'x_snc_sas_positi_0_req_task'
                            element: 'posting_description'
                            language: 'en'
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
                        id: 'ff635c108b9e4b28b2c0432a61c108af'
                        key: {
                            document_key: 'e6728198f65942229535b889f83873b0'
                            variable: 'b27b2b29ff6033008d3f5d9ad53bf164'
                        }
                    },
                ]
            }
        }
    }
}
