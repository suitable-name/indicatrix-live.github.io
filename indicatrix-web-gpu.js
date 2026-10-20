let wasm_bindgen = (function(exports) {
    let script_src;
    if (typeof document !== 'undefined' && document.currentScript !== null) {
        script_src = new URL(document.currentScript.src, location.href).toString();
    }

    /**
     * Runs when the WebGPU worker module is instantiated: installs `onmessage` and posts `Loaded`.
     */
    function start() {
        wasm.start();
    }
    exports.start = start;
    function __wbg_get_imports() {
        const import0 = {
            __proto__: null,
            __wbg_Window_a2a6c4d665047b14: function(arg0) {
                const ret = getObject(arg0).Window;
                return addHeapObject(ret);
            },
            __wbg_WorkerGlobalScope_2664448a7c667d67: function(arg0) {
                const ret = getObject(arg0).WorkerGlobalScope;
                return addHeapObject(ret);
            },
            __wbg___wbindgen_debug_string_4687d8d8c2017d52: function(arg0, arg1) {
                const ret = debugString(getObject(arg1));
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_is_function_1f9d30630b8b1d3d: function(arg0) {
                const ret = typeof(getObject(arg0)) === 'function';
                return ret;
            },
            __wbg___wbindgen_is_null_e343b7d08827ba72: function(arg0) {
                const ret = getObject(arg0) === null;
                return ret;
            },
            __wbg___wbindgen_is_string_90b56bc79aad6f6c: function(arg0) {
                const ret = typeof(getObject(arg0)) === 'string';
                return ret;
            },
            __wbg___wbindgen_is_undefined_8865fb403f8fe9d8: function(arg0) {
                const ret = getObject(arg0) === undefined;
                return ret;
            },
            __wbg___wbindgen_string_get_0380ccaa2f57f0d9: function(arg0, arg1) {
                const obj = getObject(arg1);
                const ret = typeof(obj) === 'string' ? obj : undefined;
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_throw_41e9ee4f547fc59a: function(arg0, arg1) {
                throw new Error(getStringFromWasm0(arg0, arg1));
            },
            __wbg__wbg_cb_unref_dcc1a90847f04c41: function(arg0) {
                getObject(arg0)._wbg_cb_unref();
            },
            __wbg_beginComputePass_b9a325184985e6ff: function(arg0, arg1) {
                const ret = getObject(arg0).beginComputePass(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_buffer_56ec2905a66f58b9: function(arg0) {
                const ret = getObject(arg0).buffer;
                return addHeapObject(ret);
            },
            __wbg_call_1875a20c43a36133: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                const ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3));
                return addHeapObject(ret);
            }, arguments); },
            __wbg_call_187d372bd5fdd4aa: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
                return addHeapObject(ret);
            }, arguments); },
            __wbg_call_6137034ef55c9d0f: function() { return handleError(function (arg0, arg1) {
                const ret = getObject(arg0).call(getObject(arg1));
                return addHeapObject(ret);
            }, arguments); },
            __wbg_clearTimeout_d49a4afcd9b218b7: function(arg0, arg1) {
                getObject(arg0).clearTimeout(arg1);
            },
            __wbg_configure_1e2c1c9edad07d26: function() { return handleError(function (arg0, arg1) {
                getObject(arg0).configure(getObject(arg1));
            }, arguments); },
            __wbg_copyBufferToBuffer_01766818654a9868: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                getObject(arg0).copyBufferToBuffer(getObject(arg1), arg2, getObject(arg3), arg4);
            }, arguments); },
            __wbg_copyBufferToBuffer_9c174b96fb08d551: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
                getObject(arg0).copyBufferToBuffer(getObject(arg1), arg2, getObject(arg3), arg4, arg5);
            }, arguments); },
            __wbg_createBindGroup_f539b26ca341308f: function(arg0, arg1) {
                const ret = getObject(arg0).createBindGroup(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_createBuffer_d800e9b1d41b2ee5: function() { return handleError(function (arg0, arg1) {
                const ret = getObject(arg0).createBuffer(getObject(arg1));
                return addHeapObject(ret);
            }, arguments); },
            __wbg_createCommandEncoder_3352d1ffc36c6fc0: function(arg0, arg1) {
                const ret = getObject(arg0).createCommandEncoder(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_createComputePipeline_224fa2618d9948a0: function(arg0, arg1) {
                const ret = getObject(arg0).createComputePipeline(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_createShaderModule_cefa51336cb288ae: function(arg0, arg1) {
                const ret = getObject(arg0).createShaderModule(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_data_522f7abc70721269: function(arg0) {
                const ret = getObject(arg0).data;
                return addHeapObject(ret);
            },
            __wbg_description_83b8a393160021b9: function(arg0, arg1) {
                const ret = getObject(arg1).description;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_dispatchWorkgroups_56b943172790add0: function(arg0, arg1, arg2, arg3) {
                getObject(arg0).dispatchWorkgroups(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
            },
            __wbg_end_82fd0c12ba185009: function(arg0) {
                getObject(arg0).end();
            },
            __wbg_error_757e9472f8410341: function(arg0, arg1) {
                let deferred0_0;
                let deferred0_1;
                try {
                    deferred0_0 = arg0;
                    deferred0_1 = arg1;
                    console.error(getStringFromWasm0(arg0, arg1));
                } finally {
                    wasm.__wbindgen_export4(deferred0_0, deferred0_1, 1);
                }
            },
            __wbg_error_8c8dff942c7c4f11: function(arg0) {
                const ret = getObject(arg0).error;
                return addHeapObject(ret);
            },
            __wbg_error_a30e98d44009f1bb: function(arg0, arg1) {
                console.error(getObject(arg0), getObject(arg1));
            },
            __wbg_error_c9cf3fc2064683a9: function(arg0) {
                console.error(getObject(arg0));
            },
            __wbg_features_dec7bd2fd3d91bd6: function(arg0) {
                const ret = getObject(arg0).features;
                return addHeapObject(ret);
            },
            __wbg_finish_09ec094c10f41e7b: function(arg0) {
                const ret = getObject(arg0).finish();
                return addHeapObject(ret);
            },
            __wbg_finish_ec1c191f66a895b1: function(arg0, arg1) {
                const ret = getObject(arg0).finish(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_getBindGroupLayout_349f9101ad6d4d76: function(arg0, arg1) {
                const ret = getObject(arg0).getBindGroupLayout(arg1 >>> 0);
                return addHeapObject(ret);
            },
            __wbg_getContext_e567868594d2e0c6: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            }, arguments); },
            __wbg_getMappedRange_fb54c6327b2d8d20: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = getObject(arg0).getMappedRange(arg1, arg2);
                return addHeapObject(ret);
            }, arguments); },
            __wbg_get_31af05bd4842a84f: function() { return handleError(function (arg0, arg1) {
                const ret = Reflect.get(getObject(arg0), getObject(arg1));
                return addHeapObject(ret);
            }, arguments); },
            __wbg_gpu_afdd4387c7afe5f9: function(arg0) {
                const ret = getObject(arg0).gpu;
                return addHeapObject(ret);
            },
            __wbg_has_eafa12e457ea88fb: function(arg0, arg1, arg2) {
                const ret = getObject(arg0).has(getStringFromWasm0(arg1, arg2));
                return ret;
            },
            __wbg_info_971d8b9db3dae69f: function(arg0) {
                const ret = getObject(arg0).info;
                return addHeapObject(ret);
            },
            __wbg_instanceof_ArrayBuffer_a99f175873e5d9b8: function(arg0) {
                let result;
                try {
                    result = getObject(arg0) instanceof ArrayBuffer;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_GpuOutOfMemoryError_5c3b8a2499f59adb: function(arg0) {
                let result;
                try {
                    result = getObject(arg0) instanceof GPUOutOfMemoryError;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_GpuValidationError_7659e07b12d4e184: function(arg0) {
                let result;
                try {
                    result = getObject(arg0) instanceof GPUValidationError;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Promise_e1dc6893aa1ece28: function(arg0) {
                let result;
                try {
                    result = getObject(arg0) instanceof Promise;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_isFallbackAdapter_4c8cc3b18677460a: function(arg0) {
                const ret = getObject(arg0).isFallbackAdapter;
                return ret;
            },
            __wbg_label_7add8cb37a6ef98f: function(arg0, arg1) {
                const ret = getObject(arg1).label;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_length_7f3c00c40364105e: function(arg0) {
                const ret = getObject(arg0).length;
                return ret;
            },
            __wbg_limits_06bcb36c8409843b: function(arg0) {
                const ret = getObject(arg0).limits;
                return addHeapObject(ret);
            },
            __wbg_limits_601ad2e086ef8141: function(arg0) {
                const ret = getObject(arg0).limits;
                return addHeapObject(ret);
            },
            __wbg_lost_bb454eb62101af1a: function(arg0) {
                const ret = getObject(arg0).lost;
                return addHeapObject(ret);
            },
            __wbg_mapAsync_b0597127f5037286: function(arg0, arg1, arg2, arg3) {
                const ret = getObject(arg0).mapAsync(arg1 >>> 0, arg2, arg3);
                return addHeapObject(ret);
            },
            __wbg_maxBindGroupsPlusVertexBuffers_52369f089736ef9d: function(arg0) {
                const ret = getObject(arg0).maxBindGroupsPlusVertexBuffers;
                return ret;
            },
            __wbg_maxBindGroups_4e424afe6ce86ca2: function(arg0) {
                const ret = getObject(arg0).maxBindGroups;
                return ret;
            },
            __wbg_maxBindingsPerBindGroup_7d035da36821c44f: function(arg0) {
                const ret = getObject(arg0).maxBindingsPerBindGroup;
                return ret;
            },
            __wbg_maxBufferSize_423f4a084e32a195: function(arg0) {
                const ret = getObject(arg0).maxBufferSize;
                return ret;
            },
            __wbg_maxColorAttachmentBytesPerSample_c4cd9126f6d287c6: function(arg0) {
                const ret = getObject(arg0).maxColorAttachmentBytesPerSample;
                return ret;
            },
            __wbg_maxColorAttachments_d924670762b9e250: function(arg0) {
                const ret = getObject(arg0).maxColorAttachments;
                return ret;
            },
            __wbg_maxComputeInvocationsPerWorkgroup_707a3868f7cebb59: function(arg0) {
                const ret = getObject(arg0).maxComputeInvocationsPerWorkgroup;
                return ret;
            },
            __wbg_maxComputeWorkgroupSizeX_0a4d99463cbd6e5e: function(arg0) {
                const ret = getObject(arg0).maxComputeWorkgroupSizeX;
                return ret;
            },
            __wbg_maxComputeWorkgroupSizeY_85123ea0587f7558: function(arg0) {
                const ret = getObject(arg0).maxComputeWorkgroupSizeY;
                return ret;
            },
            __wbg_maxComputeWorkgroupSizeZ_a3186b4c5267d44f: function(arg0) {
                const ret = getObject(arg0).maxComputeWorkgroupSizeZ;
                return ret;
            },
            __wbg_maxComputeWorkgroupStorageSize_57b297355cfb6204: function(arg0) {
                const ret = getObject(arg0).maxComputeWorkgroupStorageSize;
                return ret;
            },
            __wbg_maxComputeWorkgroupsPerDimension_4158f95e673d54c4: function(arg0) {
                const ret = getObject(arg0).maxComputeWorkgroupsPerDimension;
                return ret;
            },
            __wbg_maxDynamicStorageBuffersPerPipelineLayout_226b0b70910aa16c: function(arg0) {
                const ret = getObject(arg0).maxDynamicStorageBuffersPerPipelineLayout;
                return ret;
            },
            __wbg_maxDynamicUniformBuffersPerPipelineLayout_0e835fda711fc7e6: function(arg0) {
                const ret = getObject(arg0).maxDynamicUniformBuffersPerPipelineLayout;
                return ret;
            },
            __wbg_maxInterStageShaderVariables_8c4a1d727e2aa35a: function(arg0) {
                const ret = getObject(arg0).maxInterStageShaderVariables;
                return ret;
            },
            __wbg_maxSampledTexturesPerShaderStage_6675f5e91d9a728a: function(arg0) {
                const ret = getObject(arg0).maxSampledTexturesPerShaderStage;
                return ret;
            },
            __wbg_maxSamplersPerShaderStage_1910fa38a6ed1e1f: function(arg0) {
                const ret = getObject(arg0).maxSamplersPerShaderStage;
                return ret;
            },
            __wbg_maxStorageBufferBindingSize_2e244bded070b18d: function(arg0) {
                const ret = getObject(arg0).maxStorageBufferBindingSize;
                return ret;
            },
            __wbg_maxStorageBuffersPerShaderStage_a285f3ebca51ca0d: function(arg0) {
                const ret = getObject(arg0).maxStorageBuffersPerShaderStage;
                return ret;
            },
            __wbg_maxStorageTexturesPerShaderStage_7aa946f0fc322a2b: function(arg0) {
                const ret = getObject(arg0).maxStorageTexturesPerShaderStage;
                return ret;
            },
            __wbg_maxTextureArrayLayers_0e699147ad00502d: function(arg0) {
                const ret = getObject(arg0).maxTextureArrayLayers;
                return ret;
            },
            __wbg_maxTextureDimension1D_aabf6add54decfe2: function(arg0) {
                const ret = getObject(arg0).maxTextureDimension1D;
                return ret;
            },
            __wbg_maxTextureDimension2D_dd598b27e9c0c1c4: function(arg0) {
                const ret = getObject(arg0).maxTextureDimension2D;
                return ret;
            },
            __wbg_maxTextureDimension3D_f944266c65dfd1a9: function(arg0) {
                const ret = getObject(arg0).maxTextureDimension3D;
                return ret;
            },
            __wbg_maxUniformBufferBindingSize_59fa6be7cfbeeb53: function(arg0) {
                const ret = getObject(arg0).maxUniformBufferBindingSize;
                return ret;
            },
            __wbg_maxUniformBuffersPerShaderStage_bee5f00a4d706c7f: function(arg0) {
                const ret = getObject(arg0).maxUniformBuffersPerShaderStage;
                return ret;
            },
            __wbg_maxVertexAttributes_5cf6392c4e9033fe: function(arg0) {
                const ret = getObject(arg0).maxVertexAttributes;
                return ret;
            },
            __wbg_maxVertexBufferArrayStride_548baa887375d865: function(arg0) {
                const ret = getObject(arg0).maxVertexBufferArrayStride;
                return ret;
            },
            __wbg_maxVertexBuffers_75d881156591f5da: function(arg0) {
                const ret = getObject(arg0).maxVertexBuffers;
                return ret;
            },
            __wbg_message_2aad50368e15e8f1: function(arg0, arg1) {
                const ret = getObject(arg1).message;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_message_ab4cad9eeb386607: function(arg0, arg1) {
                const ret = getObject(arg1).message;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_minStorageBufferOffsetAlignment_5ba9b77792bdadb3: function(arg0) {
                const ret = getObject(arg0).minStorageBufferOffsetAlignment;
                return ret;
            },
            __wbg_minUniformBufferOffsetAlignment_ab7d52a5293b22bd: function(arg0) {
                const ret = getObject(arg0).minUniformBufferOffsetAlignment;
                return ret;
            },
            __wbg_navigator_2156486643462a87: function(arg0) {
                const ret = getObject(arg0).navigator;
                return addHeapObject(ret);
            },
            __wbg_navigator_c9bce48d4b578c9c: function(arg0) {
                const ret = getObject(arg0).navigator;
                return addHeapObject(ret);
            },
            __wbg_new_1dbf7428bba60a42: function(arg0) {
                const ret = new Uint8Array(getObject(arg0));
                return addHeapObject(ret);
            },
            __wbg_new_227d7c05414eb861: function() {
                const ret = new Error();
                return addHeapObject(ret);
            },
            __wbg_new_617a8cdb8bb1130e: function() {
                const ret = new Object();
                return addHeapObject(ret);
            },
            __wbg_new_a217df4351db4b9b: function() { return handleError(function (arg0, arg1) {
                const ret = new OffscreenCanvas(arg0 >>> 0, arg1 >>> 0);
                return addHeapObject(ret);
            }, arguments); },
            __wbg_new_typed_689a3a281a8d4da6: function() {
                const ret = new Object();
                return addHeapObject(ret);
            },
            __wbg_new_with_byte_offset_and_length_2f5d7fc2a828b74d: function(arg0, arg1, arg2) {
                const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
                return addHeapObject(ret);
            },
            __wbg_new_with_length_3da0ad195f6f63ba: function(arg0) {
                const ret = new Uint8Array(arg0 >>> 0);
                return addHeapObject(ret);
            },
            __wbg_now_d0b7f4bea9f38490: function(arg0) {
                const ret = getObject(arg0).now();
                return ret;
            },
            __wbg_now_e7c6795a7f81e10f: function(arg0) {
                const ret = getObject(arg0).now();
                return ret;
            },
            __wbg_of_d5dbecdc59e02e34: function(arg0) {
                const ret = Array.of(getObject(arg0));
                return addHeapObject(ret);
            },
            __wbg_onSubmittedWorkDone_1190213cee1ecf7e: function(arg0) {
                const ret = getObject(arg0).onSubmittedWorkDone();
                return addHeapObject(ret);
            },
            __wbg_performance_3fcf6e32a7e1ed0a: function(arg0) {
                const ret = getObject(arg0).performance;
                return addHeapObject(ret);
            },
            __wbg_performance_f994e3615154faeb: function(arg0) {
                const ret = getObject(arg0).performance;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            },
            __wbg_popErrorScope_182b8e03671d81ef: function(arg0) {
                const ret = getObject(arg0).popErrorScope();
                return addHeapObject(ret);
            },
            __wbg_postMessage_170a79621f69b186: function() { return handleError(function (arg0, arg1, arg2) {
                getObject(arg0).postMessage(getObject(arg1), getObject(arg2));
            }, arguments); },
            __wbg_prototypesetcall_bc27214492979395: function(arg0, arg1, arg2) {
                Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), getObject(arg2));
            },
            __wbg_pushErrorScope_fa7df784c43bdb51: function(arg0, arg1) {
                getObject(arg0).pushErrorScope(__wbindgen_enum_GpuErrorFilter[arg1]);
            },
            __wbg_queueMicrotask_9833f9a49df95a49: function(arg0) {
                const ret = getObject(arg0).queueMicrotask;
                return addHeapObject(ret);
            },
            __wbg_queueMicrotask_a72f977e97f23c5f: function(arg0) {
                queueMicrotask(getObject(arg0));
            },
            __wbg_queue_7b62c28143d44293: function(arg0) {
                const ret = getObject(arg0).queue;
                return addHeapObject(ret);
            },
            __wbg_reason_b4fa3af867fc4430: function(arg0) {
                const ret = getObject(arg0).reason;
                return (__wbindgen_enum_GpuDeviceLostReason.indexOf(ret) + 1 || 3) - 1;
            },
            __wbg_requestAdapter_a539af006419f2e9: function(arg0, arg1) {
                const ret = getObject(arg0).requestAdapter(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_requestDevice_5cb8a582e55d08cb: function(arg0, arg1) {
                const ret = getObject(arg0).requestDevice(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_resolve_0076e10020304ede: function(arg0) {
                const ret = Promise.resolve(getObject(arg0));
                return addHeapObject(ret);
            },
            __wbg_setBindGroup_0b7c2a055ef1f314: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
                getObject(arg0).setBindGroup(arg1 >>> 0, getObject(arg2), getArrayU32FromWasm0(arg3, arg4), arg5, arg6 >>> 0);
            }, arguments); },
            __wbg_setBindGroup_c83391351ce68826: function(arg0, arg1, arg2) {
                getObject(arg0).setBindGroup(arg1 >>> 0, getObject(arg2));
            },
            __wbg_setPipeline_5146f7b8d2b4af5c: function(arg0, arg1) {
                getObject(arg0).setPipeline(getObject(arg1));
            },
            __wbg_setTimeout_7fb1e1fe294b6ad9: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
                return ret;
            }, arguments); },
            __wbg_set_145a351398b48c65: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
                return ret;
            }, arguments); },
            __wbg_set_34d08fd992d43d61: function(arg0, arg1, arg2) {
                getObject(arg0).set(getObject(arg1), arg2 >>> 0);
            },
            __wbg_set_575d3ddb70fe831d: function(arg0, arg1, arg2) {
                getObject(arg0).set(getArrayU8FromWasm0(arg1, arg2));
            },
            __wbg_set_beginning_of_pass_write_index_fa9ae10d5d2804ce: function(arg0, arg1) {
                getObject(arg0).beginningOfPassWriteIndex = arg1 >>> 0;
            },
            __wbg_set_binding_b6cee57f35ac5190: function(arg0, arg1) {
                getObject(arg0).binding = arg1 >>> 0;
            },
            __wbg_set_buffer_1548ae88a9188037: function(arg0, arg1) {
                getObject(arg0).buffer = getObject(arg1);
            },
            __wbg_set_code_5d5b0b9e2fd0dca7: function(arg0, arg1, arg2) {
                getObject(arg0).code = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_compute_bc754d9e37f6e4c9: function(arg0, arg1) {
                getObject(arg0).compute = getObject(arg1);
            },
            __wbg_set_device_210484a77b675c9c: function(arg0, arg1) {
                getObject(arg0).device = getObject(arg1);
            },
            __wbg_set_end_of_pass_write_index_b54a8e3802b9ae0d: function(arg0, arg1) {
                getObject(arg0).endOfPassWriteIndex = arg1 >>> 0;
            },
            __wbg_set_entries_f26b77ab9548e906: function(arg0, arg1, arg2) {
                getObject(arg0).entries = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_entry_point_ac8db535971761fe: function(arg0, arg1, arg2) {
                getObject(arg0).entryPoint = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_format_f009e603f7d4c28e: function(arg0, arg1) {
                getObject(arg0).format = __wbindgen_enum_GpuTextureFormat[arg1];
            },
            __wbg_set_label_09e2da5f8522dbe8: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_17b4858e1eef23dd: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_2fefb39c0e0dbbe8: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_70a09ee68d6b1b26: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_92cd3811e96b487c: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_c7987704d29f284b: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_cfe64bca8945ee30: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_label_ee172cd5f6a96961: function(arg0, arg1, arg2) {
                getObject(arg0).label = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_layout_454e3a091b390cd4: function(arg0, arg1) {
                getObject(arg0).layout = getObject(arg1);
            },
            __wbg_set_layout_4b5d5b12fbb72a76: function(arg0, arg1) {
                getObject(arg0).layout = getObject(arg1);
            },
            __wbg_set_layout_gpu_auto_layout_mode_ee432e515c357fa8: function(arg0, arg1) {
                getObject(arg0).layout = __wbindgen_enum_GpuAutoLayoutMode[arg1];
            },
            __wbg_set_mapped_at_creation_3f320fef6761b02c: function(arg0, arg1) {
                getObject(arg0).mappedAtCreation = arg1 !== 0;
            },
            __wbg_set_module_c9946af218d23b53: function(arg0, arg1) {
                getObject(arg0).module = getObject(arg1);
            },
            __wbg_set_offset_f64_127e8a0aa5c5485a: function(arg0, arg1) {
                getObject(arg0).offset = arg1;
            },
            __wbg_set_onmessage_f75882137d0d035f: function(arg0, arg1) {
                getObject(arg0).onmessage = getObject(arg1);
            },
            __wbg_set_onuncapturederror_bb813f1102da2296: function(arg0, arg1) {
                getObject(arg0).onuncapturederror = getObject(arg1);
            },
            __wbg_set_power_preference_b42d00a8facfbade: function(arg0, arg1) {
                getObject(arg0).powerPreference = __wbindgen_enum_GpuPowerPreference[arg1];
            },
            __wbg_set_query_set_f9a94586851fdba2: function(arg0, arg1) {
                getObject(arg0).querySet = getObject(arg1);
            },
            __wbg_set_required_features_bbab71414c45e621: function(arg0, arg1, arg2) {
                getObject(arg0).requiredFeatures = getArrayJsValueViewFromWasm0(arg1, arg2);
            },
            __wbg_set_required_limits_837f62d865e7cfac: function(arg0, arg1) {
                getObject(arg0).requiredLimits = getObject(arg1);
            },
            __wbg_set_resource_8fd8658b30d86ecf: function(arg0, arg1) {
                getObject(arg0).resource = getObject(arg1);
            },
            __wbg_set_resource_gpu_buffer_binding_33099b25da65b610: function(arg0, arg1) {
                getObject(arg0).resource = getObject(arg1);
            },
            __wbg_set_resource_gpu_texture_view_4cffe7bc7c8e5cbe: function(arg0, arg1) {
                getObject(arg0).resource = getObject(arg1);
            },
            __wbg_set_size_f64_2f591b0654540477: function(arg0, arg1) {
                getObject(arg0).size = arg1;
            },
            __wbg_set_size_f64_e844c985b8f95261: function(arg0, arg1) {
                getObject(arg0).size = arg1;
            },
            __wbg_set_timestamp_writes_5f240bbaad97fcaf: function(arg0, arg1) {
                getObject(arg0).timestampWrites = getObject(arg1);
            },
            __wbg_set_usage_f3e34822998d2147: function(arg0, arg1) {
                getObject(arg0).usage = arg1 >>> 0;
            },
            __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
                const ret = getObject(arg1).stack;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_static_accessor_GLOBAL_266715b9d96ba635: function() {
                const ret = typeof global === 'undefined' ? null : global;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            },
            __wbg_static_accessor_GLOBAL_THIS_10fb7dc1ae063179: function() {
                const ret = typeof globalThis === 'undefined' ? null : globalThis;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            },
            __wbg_static_accessor_SELF_0b583911f537483a: function() {
                const ret = typeof self === 'undefined' ? null : self;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            },
            __wbg_static_accessor_WINDOW_d7f903d1508cbdc4: function() {
                const ret = typeof window === 'undefined' ? null : window;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            },
            __wbg_subgroupMaxSize_b43be0aa16182403: function(arg0) {
                const ret = getObject(arg0).subgroupMaxSize;
                return ret;
            },
            __wbg_subgroupMinSize_03feb6ee0cda6775: function(arg0) {
                const ret = getObject(arg0).subgroupMinSize;
                return ret;
            },
            __wbg_submit_077c85cc28e36892: function(arg0, arg1, arg2) {
                getObject(arg0).submit(getArrayJsValueViewFromWasm0(arg1, arg2));
            },
            __wbg_then_c8a35d4ad59c6b8e: function(arg0, arg1) {
                const ret = getObject(arg0).then(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_then_c949d5a25a4e78f8: function(arg0, arg1, arg2) {
                const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
                return addHeapObject(ret);
            },
            __wbg_then_e71170d78fcf8954: function(arg0, arg1) {
                const ret = getObject(arg0).then(getObject(arg1));
                return addHeapObject(ret);
            },
            __wbg_unconfigure_835307f58dc68d80: function(arg0) {
                getObject(arg0).unconfigure();
            },
            __wbg_unmap_6a96b14c9ef5f7f5: function(arg0) {
                getObject(arg0).unmap();
            },
            __wbg_valueOf_02fd4d101b7553c7: function(arg0) {
                const ret = getObject(arg0).valueOf();
                return addHeapObject(ret);
            },
            __wbg_writeBuffer_f4bb3f54adfe1330: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
                getObject(arg0).writeBuffer(getObject(arg1), arg2, getArrayU8FromWasm0(arg3, arg4), arg5, arg6);
            }, arguments); },
            __wbindgen_generic_0000000000000001: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 244, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_2291);
                return addHeapObject(ret);
            },
            __wbindgen_generic_0000000000000002: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("GPUDevice")], shim_idx: 191, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_1166);
                return addHeapObject(ret);
            },
            __wbindgen_generic_0000000000000003: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("GPUDeviceLostInfo")], shim_idx: 195, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_1170);
                return addHeapObject(ret);
            },
            __wbindgen_generic_0000000000000004: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("GPUUncapturedErrorEvent")], shim_idx: 195, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_1170_4);
                return addHeapObject(ret);
            },
            __wbindgen_generic_0000000000000005: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("MessageEvent")], shim_idx: 70, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_333);
                return addHeapObject(ret);
            },
            __wbindgen_generic_0000000000000006: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("any")], shim_idx: 191, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_1166_6);
                return addHeapObject(ret);
            },
            __wbindgen_generic_0000000000000007: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("undefined")], shim_idx: 191, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_1166_7);
                return addHeapObject(ret);
            },
            __wbindgen_generic_0000000000000008: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 120, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_660);
                return addHeapObject(ret);
            },
            __wbindgen_generic_0000000000000009: function(arg0) {
                // Cast intrinsic for `F64 -> Externref`.
                const ret = arg0;
                return addHeapObject(ret);
            },
            __wbindgen_generic_000000000000000a: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
                const ret = getArrayU8FromWasm0(arg0, arg1);
                return addHeapObject(ret);
            },
            __wbindgen_generic_000000000000000b: function(arg0, arg1) {
                // Cast intrinsic for `Ref(String) -> Externref`.
                const ret = getStringFromWasm0(arg0, arg1);
                return addHeapObject(ret);
            },
            __wbindgen_object_clone_ref: function(arg0) {
                const ret = getObject(arg0);
                return addHeapObject(ret);
            },
            __wbindgen_object_drop_ref: function(arg0) {
                takeObject(arg0);
            },
        };
        return {
            __proto__: null,
            "./indicatrix-web-gpu_bg.js": import0,
        };
    }

    function __wasm_bindgen_func_elem_660(arg0, arg1) {
        wasm.__wasm_bindgen_func_elem_660(arg0, arg1);
    }

    function __wasm_bindgen_func_elem_1170(arg0, arg1, arg2) {
        wasm.__wasm_bindgen_func_elem_1170(arg0, arg1, addHeapObject(arg2));
    }

    function __wasm_bindgen_func_elem_1170_4(arg0, arg1, arg2) {
        wasm.__wasm_bindgen_func_elem_1170_4(arg0, arg1, addHeapObject(arg2));
    }

    function __wasm_bindgen_func_elem_333(arg0, arg1, arg2) {
        wasm.__wasm_bindgen_func_elem_333(arg0, arg1, addHeapObject(arg2));
    }

    function __wasm_bindgen_func_elem_2291(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wasm_bindgen_func_elem_2291(retptr, arg0, arg1, addHeapObject(arg2));
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }

    function __wasm_bindgen_func_elem_1166(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wasm_bindgen_func_elem_1166(retptr, arg0, arg1, addHeapObject(arg2));
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }

    function __wasm_bindgen_func_elem_1166_6(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wasm_bindgen_func_elem_1166_6(retptr, arg0, arg1, addHeapObject(arg2));
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }

    function __wasm_bindgen_func_elem_1166_7(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wasm_bindgen_func_elem_1166_7(retptr, arg0, arg1, addHeapObject(arg2));
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }


    const __wbindgen_enum_GpuAutoLayoutMode = ["auto"];


    const __wbindgen_enum_GpuDeviceLostReason = ["unknown", "destroyed"];


    const __wbindgen_enum_GpuErrorFilter = ["validation", "out-of-memory", "internal"];


    const __wbindgen_enum_GpuPowerPreference = ["low-power", "high-performance"];


    const __wbindgen_enum_GpuTextureFormat = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16unorm", "r16snorm", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16unorm", "rg16snorm", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16unorm", "rgba16snorm", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"];

    function addHeapObject(obj) {
        if (heap_next === heap.length) heap.push(heap.length + 1);
        const idx = heap_next;
        heap_next = heap[idx];

        heap[idx] = obj;
        return idx;
    }

    const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(state => wasm.__wbindgen_export5(state.a, state.b));

    function debugString(val) {
        // primitive types
        const type = typeof val;
        if (type == 'number' || type == 'boolean' || val == null) {
            return  `${val}`;
        }
        if (type == 'string') {
            return `"${val}"`;
        }
        if (type == 'symbol') {
            const description = val.description;
            if (description == null) {
                return 'Symbol';
            } else {
                return `Symbol(${description})`;
            }
        }
        if (type == 'function') {
            const name = val.name;
            if (typeof name == 'string' && name.length > 0) {
                return `Function(${name})`;
            } else {
                return 'Function';
            }
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = '[';
            if (length > 0) {
                debug += debugString(val[0]);
            }
            for(let i = 1; i < length; i++) {
                debug += ', ' + debugString(val[i]);
            }
            debug += ']';
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches && builtInMatches.length > 1) {
            className = builtInMatches[1];
        } else {
            // Failed to match the standard '[object ClassName]'
            return toString.call(val);
        }
        if (className == 'Object') {
            // we're a user defined class or Object
            // JSON.stringify avoids problems with cycles, and is generally much
            // easier than looping through ownProperties of `val`.
            try {
                return 'Object(' + JSON.stringify(val) + ')';
            } catch (_) {
                return 'Object';
            }
        }
        // errors
        if (val instanceof Error) {
            return `${val.name}: ${val.message}\n${val.stack}`;
        }
        // TODO we could test for more things here, like `Set`s and `Map`s.
        return className;
    }

    function dropObject(idx) {
        if (idx < 1028) return;
        heap[idx] = heap_next;
        heap_next = idx;
    }

    function getArrayJsValueViewFromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        const mem = getDataViewMemory0();
        const result = [];
        for (let i = ptr; i < ptr + 4 * len; i += 4) {
            result.push(getObject(mem.getUint32(i, true)));
        }
        return result;
    }

    function getArrayU32FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
    }

    function getArrayU8FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
    }

    let cachedDataViewMemory0 = null;
    function getDataViewMemory0() {
        if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
            cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
        }
        return cachedDataViewMemory0;
    }

    function getStringFromWasm0(ptr, len) {
        return decodeText(ptr >>> 0, len);
    }

    let cachedUint32ArrayMemory0 = null;
    function getUint32ArrayMemory0() {
        if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
            cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
        }
        return cachedUint32ArrayMemory0;
    }

    let cachedUint8ArrayMemory0 = null;
    function getUint8ArrayMemory0() {
        if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
            cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8ArrayMemory0;
    }

    function getObject(idx) { return heap[idx]; }

    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            wasm.__wbindgen_export3(addHeapObject(e));
        }
    }

    let heap = new Array(1024).fill(undefined);
    heap.push(undefined, null, true, false);

    let heap_next = heap.length;

    function isLikeNone(x) {
        return x === undefined || x === null;
    }

    function makeMutClosure(arg0, arg1, f) {
        const state = { a: arg0, b: arg1, cnt: 1 };
        const real = (...args) => {

            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            const a = state.a;
            state.a = 0;
            try {
                return f(a, state.b, ...args);
            } finally {
                state.a = a;
                real._wbg_cb_unref();
            }
        };
        real._wbg_cb_unref = () => {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export5(state.a, state.b);
                state.a = 0;
                CLOSURE_DTORS.unregister(state);
            }
        };
        CLOSURE_DTORS.register(real, state, state);
        return real;
    }

    function passStringToWasm0(arg, malloc, realloc) {
        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length, 1) >>> 0;
            getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len, 1) >>> 0;

        const mem = getUint8ArrayMemory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }
        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
            const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
            ptr = realloc(ptr, len, offset, 1) >>> 0;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }

    function takeObject(idx) {
        const ret = getObject(idx);
        dropObject(idx);
        return ret;
    }

    let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    function decodeText(ptr, len) {
        return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
    }

    const cachedTextEncoder = new TextEncoder();

    if (!('encodeInto' in cachedTextEncoder)) {
        cachedTextEncoder.encodeInto = function (arg, view) {
            const buf = cachedTextEncoder.encode(arg);
            view.set(buf);
            return {
                read: arg.length,
                written: buf.length
            };
        };
    }

    let WASM_VECTOR_LEN = 0;

    let wasmModule, wasmInstance, wasm;
    function __wbg_finalize_init(instance, module) {
        wasmInstance = instance;
        wasm = instance.exports;
        wasmModule = module;
        cachedDataViewMemory0 = null;
        cachedUint32ArrayMemory0 = null;
        cachedUint8ArrayMemory0 = null;
        wasm.__wbindgen_start();
        return wasm;
    }

    async function __wbg_load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (!module.ok) {
                throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
            }

            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);
                } catch (e) {
                    const validResponse = expectedResponseType(module.type);

                    if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else { throw e; }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);
        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };
            } else {
                return instance;
            }
        }

        function expectedResponseType(type) {
            switch (type) {
                case 'basic': case 'cors': case 'default': return true;
            }
            return false;
        }
    }

    function initSync(module) {
        if (wasm !== undefined) return wasm;


        if (module !== undefined) {
            if (Object.getPrototypeOf(module) === Object.prototype) {
                ({module} = module)
            } else {
                console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
            }
        }

        const imports = __wbg_get_imports();
        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }
        const instance = new WebAssembly.Instance(module, imports);
        return __wbg_finalize_init(instance, module);
    }

    async function __wbg_init(module_or_path) {
        if (wasm !== undefined) return wasm;


        if (module_or_path !== undefined) {
            if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
                ({module_or_path} = module_or_path)
            } else {
                console.warn('using deprecated parameters for the initialization function; pass a single object instead')
            }
        }

        if (module_or_path === undefined && script_src !== undefined) {
            module_or_path = script_src.replace(/\.js$/, "_bg.wasm");
        }
        const imports = __wbg_get_imports();

        if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
            module_or_path = fetch(module_or_path);
        }

        const { instance, module } = await __wbg_load(await module_or_path, imports);

        return __wbg_finalize_init(instance, module);
    }

    return Object.assign(__wbg_init, { initSync }, exports);
})({ __proto__: null });
