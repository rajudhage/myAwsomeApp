export const colors ={
    primary:'#4CAF50',
    secondary:'#ff5722',
    background:'#f5f5f5',
    textPrimary:'#212121',
    textSecondary:'#757575',
    error:'#f44336',
    success:'#4CAF50',
    warning:'#ff9800',
    info:'#2196F3',
    dark:'#212121',
    light:'#f5f5f5',
    white:'#ffffff',
    black:'#000000',
    transparent:'transparent',
    
}

export const typography = {
  h1: { fontSize: 32, fontWeight: '700' as const, lineHeight: 40 },
  h2: { fontSize: 28, fontWeight: '600' as const, lineHeight: 36 },
  h3: { fontSize: 24, fontWeight: '600' as const, lineHeight: 32 },
  h4: { fontSize: 20, fontWeight: '500' as const, lineHeight: 28 },
  h5: { fontSize: 18, fontWeight: '500' as const, lineHeight: 24 },
  h6: { fontSize: 16, fontWeight: '500' as const, lineHeight: 22 },
  bodyLarge: { fontSize: 16, fontWeight: '400' as const, lineHeight: 24 },
  bodyMedium: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
  bodySmall: { fontSize: 12, fontWeight: '400' as const, lineHeight: 18 },
  labelLarge: { fontSize: 14, fontWeight: '500' as const, lineHeight: 20 },
  labelMedium: { fontSize: 12, fontWeight: '500' as const, lineHeight: 16 },
  labelSmall: { fontSize: 11, fontWeight: '500' as const, lineHeight: 14 },
  button: { fontSize: 14, fontWeight: '500' as const, lineHeight: 20 },
  caption: { fontSize: 12, fontWeight: '400' as const, lineHeight: 16 }, 
};

export const spacing = {
    spacingSmall:5,
    spacingMedium:10,
    spacingLarge:15,
    spacingXLarge:20,
}

export const borderRadius = {
    borderRadiusSmall:5,
    borderRadiusMedium:10,
    borderRadiusLarge:15,
}

export const shadows = {
    shadowSmall:{
        shadowColor:'#000',
        shadowOffset:{width:0, height:1},
        shadowOpacity:0.2,
        shadowRadius:1.41,
        elevation:2,
    },
    shadowMedium:{
        shadowColor:'#000',
        shadowOffset:{width:0, height:3},
        shadowOpacity:0.27,
        shadowRadius:4.65,
        elevation:6,
    },
    shadowLarge:{
        shadowColor:'#000',
        shadowOffset:{width:0, height:6},
        shadowOpacity:0.37,
        shadowRadius:7.49,
        elevation:12,
    }
}   